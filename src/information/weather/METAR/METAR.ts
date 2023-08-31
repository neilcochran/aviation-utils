import { DateTime } from 'luxon';
import { ICAOIdentifier } from '../../ICAO-identifiers';

/**
 * An enum representing the type of message.
 */
export enum MessageType {
    METAR = 'METAR', // routine weather report
    SPECI = 'SPECI', // special weather report, triggered by a weather change
}

/**
 * An enum representing the optional Report Modifier field.
 */
export enum ReportModifier {
    AUTO = 'AUTO', //Report is automatically generated
    COR = 'COR', //Report is a correction to a previous report
}

/**
 * An interface representing a METAR date time group which encodes a day of the month, and a 24 hour time stamp.
 */
export interface DateTimeGroup {
    dayOfMonth: number;
    hour: number;
    minutes: number;
    utcDisplay: string;
}

/**
 * A class containing representing all elements of a METAR message
 */
export class METAR {
    constructor(
        public messageType: MessageType,
        public icaoIdentifier: ICAOIdentifier,
        public issuedAt: DateTimeGroup,
        public reportModifier?: ReportModifier
    ){}
}

/**
 * Regex used internally for validating the overall structure/format of a METAR Date Time Group string. This does not fully validate the date time itself, just the format.
 * [0-3] - The first digit of the two digits refers to the day of the month, so it can only be 0-3
 * \d    - Second digit in day of the month
 * [0-2] - First digit of hour, so it can only be 0-2
 * \d    - The second digit of the hour
 * [0-5] - The first digit of the minutes, so it can only be 0-5
 * \d    - The second digit of the minutes
 * Z     - Since this is all in UTC, Z represents the GMT offset of zero
 */
const DATE_TIME_GROUP_REGEX = new RegExp('^[0-3]\\d[0-2]\\d[0-5]\\dZ$');

/**
 * Parse a METAR formatted Date Time Group string.
 * The first two digits refers to the day of the month. The next 2 digits refers hour, and
 * the subsequent 2 refers to the minutes. The ending Z refers to the UTC GMT offset which is (Z)ero, or ZULU.
 *
 * @param dateTimeStr The METAR date time group string to parse
 * @returns A Date object populated with the month, day, and time given in the dateTimeStr.
 * It will set the year to the current year, since METAR never contains a year. If the input is invalid, undefined is returned.
 */
export function parseDateTimeGroup(dateTimeStr: string): DateTimeGroup | undefined {
    //date time group strings must always be 7 characters and match the expected format
    if(dateTimeStr.length != 7 || !DATE_TIME_GROUP_REGEX.test(dateTimeStr)) {
        return undefined;
    }
    //although the string is in the expected format, we still need to validate the values.
    //since we're guaranteed to have positive integers at this point (enforced in the regex) we don't need to test for negatives.
    const dayOfMonth = parseInt(dateTimeStr.substring(0, 2));
    if(dayOfMonth <= 0 || dayOfMonth >= 32) {
        return undefined;
    }
    const hour = parseInt(dateTimeStr.substring(2, 4));
    if(hour >= 25) {
        return undefined;
    }
    const minutes = parseInt(dateTimeStr.substring(4, 6));
    if(minutes > 59) {
        return undefined;
    }
    const displayValue = DateTime.fromISO(`${dateTimeStr.substring(2, 4)}:${dateTimeStr.substring(4, 6)}`).toLocaleString(DateTime.TIME_24_SIMPLE);
    return {
        dayOfMonth: dayOfMonth,
        hour: hour,
        minutes: minutes,
        utcDisplay: displayValue
    };
}
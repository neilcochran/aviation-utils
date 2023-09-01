import { ICAOIdentifier } from '../../ICAO-identifiers';
import { Wind } from '../wind';
import { DateTimeGroup } from '../date-time-group';
import { Visibility } from '../visibility';

/**
 * A class containing representing all elements of a METAR message
 */
export class METAR {
    constructor(
        public messageType: MessageType,
        public icaoIdentifier: ICAOIdentifier,
        public issuedAt: DateTimeGroup,
        public reportModifier: ReportModifier | undefined,
        public wind: Wind,
        public visibility: Visibility
    ){}
}

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
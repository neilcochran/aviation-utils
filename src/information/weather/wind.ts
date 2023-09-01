import { SpeedUnits } from '../../common/speed';

/**
 * A class representing Wind. This includes the wind speed, direction, and reported variable wind angles when relevant (if direction varies by 60 degrees or more)
 */
export class Wind {

    /**
     * @param directionAngle The angle of the wind relative to true north
     * @param speed The speed of the wind
     * @param gustSpeed
     * @param speedUnit The units of the speed value
     * @param windsVariableAngleFrom Variable winds, the minimum wind angle. If defined, windsVariableAngleTo must also be defined.
     * @param windsVariableAngleTo Variable winds, the maximum wind angle. If defined, windsVariableAngleFrom must also be defined.
     */
    constructor(
        public directionAngle: number,
        public speed: number,
        public gustSpeed: number,
        public speedUnit: SpeedUnits,
        public windsVariableAngleFrom?: number,
        public windsVariableAngleTo?: number
    ){
        if(speed < 0) {
            throw new Error(`speed cannot be negative: ${speed}`);
        }
        if(gustSpeed < 0) {
            throw new Error(`gustSpeed cannot be negative: ${gustSpeed}`);
        }
        if(directionAngle < 0 || directionAngle > 360) {
            throw new Error(`directionAngle: ${directionAngle}, must be between 0 and 360 degrees`);
        }
        if((windsVariableAngleFrom != undefined && windsVariableAngleTo == undefined) || (windsVariableAngleFrom == undefined && windsVariableAngleTo != undefined)) {
            throw new Error('when using winds variable, both windsVariableAngleFrom and windsVariableAngleTo must be given');
        }
        if(windsVariableAngleFrom != undefined && windsVariableAngleTo != undefined){
            if(windsVariableAngleFrom < 0 || windsVariableAngleFrom > 360) {
                throw new Error(`windsVariableAngleFrom: ${windsVariableAngleFrom}, must be between 0 and 360 degrees`);
            }
            if(windsVariableAngleTo < 0 || windsVariableAngleTo > 360) {
                throw new Error(`windsVariableAngleTo: ${windsVariableAngleTo}, must be between 0 and 360 degrees`);
            }
        }
    }

    /**
     * @returns A readable display string summarizing the wind object
     */
    public toDisplayString() {
        const windsVariable = `${this.windsVariableAngleFrom != undefined && this.windsVariableAngleTo != undefined ? `, variable from ${this.windsVariableAngleFrom}° to ${this.windsVariableAngleTo}°` : ''}`;
        return `Wind direction ${this.directionAngle}°, speed ${this.speed}${this.speedUnit} gusting ${this.gustSpeed}${this.speedUnit}${windsVariable}`;
    }
}
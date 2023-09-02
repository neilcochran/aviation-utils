/**
 * TODO
 */
export class Runway {
    constructor(public runwayName: string, public runwayNumber: number, public runwayModifier: RunwayModifier){}
}

/**
 * TODO
 */
export enum RunwayModifier {
    Left = 'L',
    Right = 'R',
    Center = 'C'
}
import { DistanceUnits } from '../../common/units';

export class Visibility {
    constructor(public visibility: number, public distanceUnits: DistanceUnits){
        if(visibility < 0) {
            throw new Error(`visibility cannot be negative: ${visibility}`);
        }
    }
}
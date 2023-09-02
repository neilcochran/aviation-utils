import { DistanceUnits } from '../../common/units';

/**
 * TODO
 */
export class Visibility {

    /**
     * TODO
     * @param visibility
     * @param distanceUnits
     * @param visibilityModifier
     */
    constructor(public visibility: number, public distanceUnits: DistanceUnits, public visibilityModifier?: VisibilityModifier){
        if(visibility < 0) {
            throw new Error(`visibility cannot be negative: ${visibility}`);
        }
    }
}

/**
 * TODO
 */
export class VariableVisibility extends Visibility {

    /**
     * TODO
     */
    constructor(minVisibility: number, public maxVisibility: number, public distanceUnits: DistanceUnits, public trend?: VariableVisibilityTrend){
        super(minVisibility, distanceUnits);
        if(maxVisibility < 0) {
            throw new Error(`visibility cannot be negative: ${maxVisibility}`);
        }
        if(minVisibility >= maxVisibility) {
            throw new Error('minVisibility must be less than maxVisibility');
        }
    }
}

/**
 * TODO
 */
export enum VisibilityModifier {
    GreaterThan = 'P',
    LessThan = 'M'
}

/**
 * TODO
 */
export enum VariableVisibilityTrend {
    Increasing = 'U',
    Decreasing = 'D',
    NotChanging = 'N'
}
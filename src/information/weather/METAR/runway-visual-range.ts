import { Runway } from '../../../common/runway';
import { VariableVisibility, Visibility } from '../visibility';

/**
 * TODO
 */
export class RunwayVisualRange {

    /**
     * TODO
     */
    constructor(
        public runway: Runway,
        public visibility: Visibility | VariableVisibility,
        public trend?: VisibilityTrend
    ){}
}

/**
 * TODO
 */
export enum VisibilityTrend {
    Increasing = 'U',
    Decreasing = 'D',
    NotChanging = 'N'
}
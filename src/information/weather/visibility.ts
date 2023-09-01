import { DistanceUnits } from '../../common/units';

/**
 *
 */
export class Visibility {

    /**
     *
     * @param visibility
     * @param distanceUnits
     * @param varyingVisibilityFrom
     * @param varyingVisibilityTo
     */
    constructor(public visibility: number, public distanceUnits: DistanceUnits, public varyingVisibilityFrom?: number, public varyingVisibilityTo?: number){
        if(visibility < 0) {
            throw new Error(`visibility cannot be negative: ${visibility}`);
        }
        if((varyingVisibilityFrom != undefined && varyingVisibilityTo == undefined) || (varyingVisibilityFrom == undefined && varyingVisibilityTo != undefined)) {
            throw new Error('when using variable visibility, both varyingVisibilityFrom and varyingVisibilityTo must be given');
        }
        if(varyingVisibilityFrom != undefined && varyingVisibilityTo != undefined) {
            if(varyingVisibilityFrom < 0) {
                throw new Error(`varyingVisibilityFrom cannot be negative: ${varyingVisibilityFrom}`);
            }
            if(varyingVisibilityTo < 0) {
                throw new Error(`varyingVisibilityTo cannot be negative: ${varyingVisibilityTo}`);
            }
        }
    }
}
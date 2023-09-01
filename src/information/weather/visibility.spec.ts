import assert from 'assert';
import { Visibility } from './visibility';
import { DistanceUnits } from '../../common/units';

describe('enforce Visibility constructor validation', () => {
    //Positive test cases
    it('construct a valid Visibility object', () => {
        const visibility = new Visibility(5, DistanceUnits.STATUTE_MILES);
        assert.ok(visibility);
        assert.equal(visibility.visibility, 5);
        assert.equal(visibility.distanceUnits, DistanceUnits.STATUTE_MILES);
    });
    it('construct a valid Visibility object with variable visibility', () => {
        const visibility = new Visibility(700, DistanceUnits.METERS, 1000, 3000);
        assert.ok(visibility);
        assert.equal(visibility.visibility, 700);
        assert.equal(visibility.distanceUnits, DistanceUnits.METERS);
        assert.equal(visibility.varyingVisibilityFrom, 1000);
        assert.equal(visibility.varyingVisibilityTo, 3000);
    });

    //Negative test cases
    it('fail to construct due to invalid distance value', () => {
        assert.throws(() => new Visibility(-1, DistanceUnits.KILOMETERS), {
            name: 'Error',
            message: 'visibility cannot be negative: -1'
        });
    });
    it('fail to construct due to only passing varyingVisibilityFrom value', () => {
        assert.throws(() => new Visibility(2000, DistanceUnits.FEET, 500), {
            name: 'Error',
            message: 'when using variable visibility, both varyingVisibilityFrom and varyingVisibilityTo must be given'
        });
    });
    it('fail to construct due to only passing varyingVisibilityTo value', () => {
        assert.throws(() => new Visibility(2000, DistanceUnits.FEET, undefined, 500), {
            name: 'Error',
            message: 'when using variable visibility, both varyingVisibilityFrom and varyingVisibilityTo must be given'
        });
    });
});
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

    //Negative test cases
    it('fail to construct due to invalid distance value', () => {
        assert.throws(() => new Visibility(-1, DistanceUnits.METERS), {
            name: 'Error',
            message: 'visibility cannot be negative: -1'
        });
    });
});
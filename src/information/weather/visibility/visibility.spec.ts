import assert from 'assert';
import { VariableVisibility, Visibility, VisibilityModifier } from './visibility';
import { DistanceUnits } from '../../../common/units';

describe('enforce Visibility constructor validation', () => {
    //Positive test cases
    it('construct a valid Visibility object', () => {
        const visibility = new Visibility(5, DistanceUnits.STATUTE_MILES);
        assert.ok(visibility);
        assert.equal(visibility.visibility, 5);
        assert.equal(visibility.distanceUnits, DistanceUnits.STATUTE_MILES);
    });
    it('construct a valid Visibility object with visibility modifier', () => {
        const visibility = new Visibility(1200, DistanceUnits.METERS, VisibilityModifier.LessThan);
        assert.ok(visibility);
        assert.equal(visibility.visibility, 1200);
        assert.equal(visibility.visibilityModifier, VisibilityModifier.LessThan);
    });

    //Negative test cases
    it('fail to construct due to invalid distance value', () => {
        assert.throws(() => new Visibility(-1, DistanceUnits.KILOMETERS), {
            name: 'Error',
            message: 'visibility cannot be negative: -1'
        });
    });
});


describe('enforce VariableVisibility constructor validation', () => {
    //Positive test cases
    it('construct a valid Visibility object', () => {
        const variableVis = new VariableVisibility(600, 1000, DistanceUnits.FEET);
        assert.ok(variableVis);
        assert.equal(variableVis.visibility, 600);
        assert.equal(variableVis.maxVisibility, 1000);
    });

    //Negative test cases
    it('fail to construct a VariableVisibility object due to negative minVisibility value', () => {
        assert.throws(() => new VariableVisibility(-1, 2, DistanceUnits.STATUTE_MILES), {
            name: 'Error',
            message: 'visibility cannot be negative: -1'
        });
    });
    it('fail to construct a VariableVisibility object due to negative maxVisibility value', () => {
        assert.throws(() => new VariableVisibility(-100, 2000, DistanceUnits.METERS), {
            name: 'Error',
            message: 'visibility cannot be negative: -100'
        });
    });
    it('fail to construct a VariableVisibility object due to maxVisibility being less than minVisibility value', () => {
        assert.throws(() => new VariableVisibility(2000, 500, DistanceUnits.METERS), {
            name: 'Error',
            message: 'minVisibility must be less than maxVisibility'
        });
    });
});
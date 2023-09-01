import assert from 'assert';
import { SpeedUnits } from '../../common/speed';
import { Wind } from './wind';

describe('enforce Wind constructor validation', () => {
    //Positive test cases
    it('construct a valid wind object with no variable winds', () => {
        const wind = new Wind(210, 12, 17, SpeedUnits.KNOTS);
        assert.ok(wind);
        assert.equal(wind.toDisplayString(), 'Wind direction 210°, speed 12KT gusting 17KT');
    });
    it('construct a valid wind object with variable winds', () => {
        const wind = new Wind(100, 7, 15, SpeedUnits.METERS_PER_SEC, 60, 130);
        assert.ok(wind);
        assert.equal(wind.toDisplayString(), 'Wind direction 100°, speed 7MPS gusting 15MPS, variable from 60° to 130°');
    });
    it('construct a valid wind object with variable winds', () => {
        const wind = new Wind(30, 15, 26, SpeedUnits.MILES_PER_HOUR, 0, 80);
        assert.ok(wind);
        assert.equal(wind.toDisplayString(), 'Wind direction 30°, speed 15MPH gusting 26MPH, variable from 0° to 80°');
    });

    //Negative test cases
    it('fail to construct a wind object due to invalid speed', () => {
        assert.throws(() => new Wind(90, -5, 10, SpeedUnits.KNOTS),  {
            name: 'Error',
            message: 'speed cannot be negative: -5'
        },);
    });
    it('fail to construct a wind object due to invalid gustSpeed', () => {
        assert.throws(() => new Wind(50, 15, -7, SpeedUnits.MILES_PER_HOUR),  {
            name: 'Error',
            message: 'gustSpeed cannot be negative: -7'
        },);
    });
    it('fail to construct a wind object due to invalid directionAngle', () => {
        assert.throws(() => new Wind(361, 5, 10, SpeedUnits.METERS_PER_SEC),  {
            name: 'Error',
            message: 'directionAngle: 361, must be between 0 and 360 degrees'
        },);
    });
    it('fail to construct a wind object due to providing only windsVariableAngleFrom and not windsVariableAngleTo', () => {
        assert.throws(() => new Wind(10, 12, 16, SpeedUnits.KNOTS, 12),  {
            name: 'Error',
            message: 'when using winds variable, both windsVariableAngleFrom and windsVariableAngleTo must be given'
        },);
    });
    it('fail to construct a wind object due to invalid windsVariableAngleFrom', () => {
        assert.throws(() => new Wind(10, 12, 16, SpeedUnits.KNOTS, 20),  {
            name: 'Error',
            message: 'when using winds variable, both windsVariableAngleFrom and windsVariableAngleTo must be given'
        },);
    });
    it('fail to construct a wind object due to invalid windsVariableAngleTo', () => {
        assert.throws(() => new Wind(10, 12, 16, SpeedUnits.KNOTS, 10, 400),  {
            name: 'Error',
            message: 'windsVariableAngleTo: 400, must be between 0 and 360 degrees'
        },);
    });
});
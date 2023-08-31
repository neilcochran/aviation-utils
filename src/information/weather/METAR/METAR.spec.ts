import assert from 'assert';
import { parseDateTimeGroup } from './METAR';
describe('parse METAR date time group strings into Dates', () => {
    //Positive test cases
    it('should parse 220136Z', () => {
        const date = parseDateTimeGroup('220136Z');
        assert.ok(date);
        assert.equal(date.dayOfMonth, 22);
        assert.equal(date.hour, 1);
        assert.equal(date.minutes, 36);
        assert.equal(date.utcDisplay, '01:36');
    });
    it('should parse 161753Z', () => {
        const date = parseDateTimeGroup('161753Z');
        assert.ok(date);
        assert.equal(date.dayOfMonth, 16);
        assert.equal(date.hour, 17);
        assert.equal(date.minutes, 53);
        assert.equal(date.utcDisplay, '17:53');
    });
    it('should parse 091050Z', () => {
        const date = parseDateTimeGroup('091050Z');
        assert.ok(date);
        assert.equal(date.dayOfMonth, 9);
        assert.equal(date.hour, 10);
        assert.equal(date.minutes, 50);
        assert.equal(date.utcDisplay, '10:50');
    });
    it('should parse 280000Z', () => {
        const date = parseDateTimeGroup('280000Z');
        assert.ok(date);
        assert.equal(date.dayOfMonth, 28);
        assert.equal(date.hour, 0);
        assert.equal(date.minutes, 0);
        assert.equal(date.utcDisplay, '00:00');
    });
    it('should parse 012359Z', () => {
        const date = parseDateTimeGroup('012359Z');
        assert.ok(date);
        assert.equal(date.dayOfMonth, 1);
        assert.equal(date.hour, 23);
        assert.equal(date.minutes, 59);
        assert.equal(date.utcDisplay, '23:59');
    });

    //Negative test cases
    it('should fail to parse 320000Z since 32 is an invalid day of month value', () => {
        assert.equal(parseDateTimeGroup('320000Z'), undefined);
    });
    it('should fail to parse 012500Z since 25 is an invalid hour value', () => {
        assert.equal(parseDateTimeGroup('012500Z'), undefined);
    });
    it('should fail to parse 011260Z since 60 is an invalid minutes value', () => {
        assert.equal(parseDateTimeGroup('011260Z'), undefined);
    });
});
import assert from 'assert';
import { EG, K, parseICAOIdentifier } from './ICAO-identifiers';

describe('test ICAO Identification parsing', () => {
    it('should parse the valid ICAO identifier: "KPWM" which has a single letter prefix "K"', () => {
        const icaoID = parseICAOIdentifier('KPWM');
        assert.ok(icaoID);
        assert.equal(icaoID.fullIdentifier, 'KPWM');
        assert.deepEqual(icaoID.identifierPrefix, K);
        assert.equal(icaoID.airportIdentifier, 'PWM');
    });

    it('should parse the valid ICAO identifier: "EGLL" which has a two letter prefix "EG"', () => {
        const icaoID = parseICAOIdentifier('EGLL');
        assert.ok(icaoID);
        assert.equal(icaoID.fullIdentifier, 'EGLL');
        assert.deepEqual(icaoID.identifierPrefix, EG);
        assert.equal(icaoID.airportIdentifier, 'LL');
    });
    it('should fail to parse the invalid identifier: IABC and return undefined', () => {
        const icaoId = parseICAOIdentifier('IABC');
        assert.equal(icaoId, undefined);
    });
});
const chai = require('chai');
const expect = chai.expect;
chai.should();
const GenerateTokenProcessTest = require('../../components/process/generateTokenProcess');

describe('generateTokenTests', () => {
    let generateTokenTest = new GenerateTokenProcessTest();

    it('does not returns the token', async () => {
        var token = await generateTokenTest.generateToken('abc','abc','abc');
        expect(token[0]).to.equal(401);
    });

    it('returns the token', async () => {
        var token = await generateTokenTest.generateToken('plural-edge','plural-edge','9d421b0a-76ce-11eb-bb47-eb0c7a40d053');
        expect(token[0]).to.equal(200);
    });
    
});

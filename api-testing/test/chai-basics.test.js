const chai = require('chai');
const expect = chai.expect;

console.log(process.env.NODE_ENV);
describe("File name", ()=> {
    it("Should compare values", ()=>{
        expect(1).to.equal(1);
    })
    it('Should fail', ()=> {
        expect({name:"nom"}).to.equal({name: 'nom'});
    })
    it('Should sucessede', ()=> {
        expect({name:"nom"}).to.deep.equal({name: 'nom'});
        expect({name: 'nom'}).to.have.property('name').to.equal('nom');
        expect(5>8).to.be.false;
        expect({name: 'nom'}).to.be.a('object');
        expect({name: 'nom'}.name).to.be.a('string')
        expect([1,2,3].length).to.equal(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    })

}) 
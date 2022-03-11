const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const demo = require("../src/demo.js");

describe('demo', ()=> {
    context('add', ()=> {
        it('Additionner deux nombre', ()=> {
            expect(demo.add(1,2)).to.equal(3);
        })
    })

    context('Callback add', ()=> {
        it("Test la callback", (done)=> {
            demo.addCallback(1,2,(error, result)=> {
                expect(error).to.not.exist;
                expect(result).to.equal(3);
                done();
            })
        })
    })

    context('Test promise', ()=> {
        it('Additionner deux nombre avec une promesse', ()=> {
            demo.addPromise(1,2).then( result=> {
                expect(result).to.equal(3);
                done();
            }).catch(error=> done(error))
        })

        it('test une promesse avec Async', async ()=> {
            let result = await demo.addPromise(1,2)

            expect(result).to.equal(3); 
        })

        it('test Async avec as promised', async ()=> {
            await expect(demo.addPromise(1,2)).to.eventually.equal(3);
        })

    })
 
})
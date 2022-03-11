const assert = require('assert');

describe("ficher à tester", ()=>{
    before( ()=> {
        console.log("---Before---")
    } )
    after( ()=> {
        console.log("---After---")
    } )

    afterEach( ()=> {
        console.log("---");
    }) 
    context('nom function', ()=> {
        it("should so do this", ()=> {
            assert.equal(1,1);
        })
        it('passing test', ()=> {
            assert.deepEqual({name : 'nom'}, {name : 'nom'});
        })
        it('failling test', ()=> {
            assert.equal({name : 'nom'}, {name : 'nom'});
        })

    })
})

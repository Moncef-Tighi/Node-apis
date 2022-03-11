const assert = require('assert');

describe("ficher à tester", ()=>{
    before( ()=> {
        console.log("---Before---")
    } )
    after( ()=> {
        console.log("---After---")
    } )

    beforeEach( ()=> {
        console.log(">");
    }) 
    context('nom function', ()=> {
        before( ()=> {
            console.log("--Start--")
        } )
        after( ()=> {
            console.log("--End--")
        } )
    
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

    context('Autre fonction', ()=> {
        before( ()=> {
            console.log("--Start--")
        } )
        after( ()=> {
            console.log("--End--")
        } )
    
        it("new equal", ()=> {
            assert.equal(1,1);
        })
        it('Fin', ()=> {
            assert.deepEqual({name : 'nom'}, {name : 'nom'});
        })

    })
})

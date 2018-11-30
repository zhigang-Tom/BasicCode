const expect = require('chai').expect
const http =require('../client')
const mod ="test"
const URL= (path,token)=>http.url(`${mod}/${path}`, token);

describe('1 Test module', async () =>{
    get_TestSuite()
    httpMothods_TestSuite()
    error_TestSuite()
});


async function get(method){
    return await http.get(URL(method, null))
}

//--------------- Test Suite ---------------
function get_TestSuite(){

    describe('1-1 Get mothod', () =>{
        it('1) Connect', async ()=>{
            let res = await get('')
            expect(res.status).to.be.equal(200)
            expect(res.data).to.contain('connect success');
        });

        it('1) Call Method', async ()=>{
            let res = await get('method')
            expect(res.status).to.be.equal(200)
            expect(res.data).to.contain('hello');
        })
    })
}

function httpMothods_TestSuite(){

    const body = {myname:'guixue'}
    describe('1-2 Other methods', () =>{
        it('1) Post ', async ()=>{
            let res = await http.post(URL('post', null), body)
            expect(res.status).to.be.equal(200)
            expect(res.data).to.eql(body)
        })
        it('2) Put ', async ()=>{
            let res = await http.put(URL('put', null), body)
            expect(res.status).to.be.equal(200)
            expect(res.data).to.eql(body)
        })
        it('3) Delete ', async ()=>{
            let res = await http.del(URL('del/123321', null))
            expect(res.status).to.be.equal(200)
            expect(res.data).to.be.equal('123321')
        })
    })
}

function error_TestSuite(){
    describe('1-3 Error Handler', () =>{
        it('1) 401 ', async ()=>{
            let res = await get('error/401')
            expect(res.status).to.be.equal(401)
            expect(res.data.message).to.contain('error info');
        });

        it('2) 404', async ()=>{
            let res = await get('error/404')
            expect(res.status).to.be.equal(404)
            expect(res.data.message).to.contain('error info');
        })

        it('3) 406', async ()=>{
            let res = await get('error/406')
            expect(res.status).to.be.equal(406)
            expect(res.data.message).to.contain('error info');
        })

        it('4) 500', async ()=>{
            let res = await get('error/500')
            expect(res.status).to.be.equal(500)
            expect(res.data.message).to.contain('error info');
        })
    })
}



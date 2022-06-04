const chai = require('chai'); 
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../app'); 

describe('First test collection', () =>{
    it('testing signup page', (done)=>{
        chai.request('http://localhost:4000')
        .get('/register')
        .end((err,res)=>{
            res.should.have.status(200);
            expect(err).to.be.null;
            res.should.be.a('object')
            // Done to signal callback end
            done(); 
        })   
    }); 


})



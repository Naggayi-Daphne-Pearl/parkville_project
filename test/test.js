

const chai=require('chai');
const chaiHttp=require('chai-http');
chai.use(chaiHttp);
const expect=chai.expect;
const should=chai.should();
const server=require('../app');

describe('register student',()=>{
 it('Should run all api tasks ',(done)=>{
  chai.request('http://localhost:5000')
  .get('/register')
  .end((err,res)=>{
   res.should.have.status(200);
   expect(err).to.be.null;
   expect(attributes.name).to.eql('string');
   console.log('register page rendered');
   done();
  })
 }); 

 it('Should not run any api tasks ',(done)=>{
    chai.request('http://localhost:5000')
    .get('/register')
    .end((err,res)=>{
     res.should.have.status(404);
     expect(err).to.be.null;
     console.error('test failed');
     done();
    })
   });

})



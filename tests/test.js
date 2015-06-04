// tests.js
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            chai.expect([1,2,3].indexOf(5)).to.be.equal(-1);
            chai.expect([1,2,3].indexOf(0)).to.be.equal(-1);
        });
    });
});
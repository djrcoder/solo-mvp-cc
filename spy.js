require("@fatso83/mini-mocha").install();
var sinon = require("sinon");


describe('User Servicer', function () {
    var sandbox = sinon.createSandbox();
    const userId = 1;
    const callLog = [];

    beforeEach(function () {
        sandbox.spy(db.prototype.getById(userId));
    });

    afterEach(function () {
        sandbox.restore();
    });

    callLog.push(db.prototype.getById(args))


    it("it ", function () {


        assert(callLog.calledOnce);
        assert.equals(jQuery.ajax.getCall(0).args[0].url);
        assert.equals("json", jQuery.ajax.getCall(0).args[0].dataType);
    })

})



{

    setUp: function () {
        sinon.spy("DB", getById)
    },

    tearDown: function() {
        DB.getById.restore()
    }

}


// spy

describe("was Join called?", () => {
    it("should see if array.prototype.tostring uses join", () => {


        const originalJoin = Array.prototype.join;
        const spy = sinon.spy(Array, "join");

        const actual = [1, 2, 3, 4, 5].toString();

        expect(spy.called).to.be.true

        spy.restore()

    })
})
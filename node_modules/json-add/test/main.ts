import merge from "../index";
import * as chai from "chai";
let expect = chai.expect;

let arr1_copy = {
    aa: "aa",
    bb: "bb",
    zz: "zz",
    hh: {
        qq: "rr",
        zz: ["pp", "ff"]
    }

};

let arr1 = {
    aa: "aa",
    bb: "bb",
    zz: "zz",
    hh: {
        qq: "rr",
        zz: ["pp", "ff"]
    }

};

let arr2 = {
    aa: "aa",
    bb: "cc",
    dd: "dd"
};

let arr3 = {
    aa: "aa",
    bb: "cc",
    dd: "dd",
    zz: "zz",
    hh: {
        qq: "rr",
        zz: ["pp", "ff"]
    }
};

merge(arr1, arr2);

describe("new generated object", function() {
    it("exist", function() {
        expect(arr1).to.be.ok;
    });

    it("is an object", function() {
        expect(arr1).is.an("object");
    });

    it("contains all property present of 1 object", function() {
        for (let i = 0; i < Object.keys(arr1_copy).length; i++) {
            expect(arr1).to.have.property(Object.keys(arr1_copy)[i]);
        }
    });

    it("contains all property present on 2 object", function() {
        for (let i = 0; i < Object.keys(arr2).length; i++) {
            expect(arr1).to.have.property(Object.keys(arr2)[i]);
        }
    });

    it("is deep equal of the 3 object", function() {
        expect(arr1).to.eql(arr3);
    });


});

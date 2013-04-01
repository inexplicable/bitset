var BitSet = require("../index.js"),
    _ = require("underscore"),
    assert = require("assert");

describe("BitSet", function(){

    describe("#set", function(){

        var i = 0;
        var bits = new BitSet();

        it("should set 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                bits.set(i);
            }
            console.log("set 1,000,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });
    });


    describe("#clear", function(){

        var i = 0;
        var bits = new BitSet();

        it("should set 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                bits.set(i);
            }
            console.log("set 1,000,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            console.log("clear 500,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });
    });

    describe("#get", function(){

        var i = 0;
        var bits = new BitSet();

        it("should set 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                bits.set(i);
            }
            console.log("set 1,000,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            console.log("clear 500,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });

        
        it("should get 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                assert.ok(i & 1 ? bits.get(i) : !bits.get(i));
            }
            console.log("get 1,000,000 using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });
    });

    describe("#cardinality", function(){

        var i = 0;
        var bits = new BitSet();

        it("should set 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                bits.set(i);
            }
            console.log("set 1,000,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            console.log("clear 500,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });

        it("should calculate cardinality fast", function(done){
            var begin = new Date().getTime();
            assert.equal(500000, bits.cardinality());
            console.log("cardinality using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });
    });

    describe("#nextSetBit", function(){

        var i = 0;
        var bits = new BitSet();

        it("should set 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                bits.set(i);
            }
            console.log("set 1,000,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            console.log("clear 500,000 times using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });

        it("should nextSetBit fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                assert.equal(i & 1 ? i : i + 1, bits.nextSetBit(i));
            }
            console.log("nextSetBit 1,000,000 using " + (new Date().getTime() - begin) + "ms\n");
            done();
        });
    });
});
var BitSet = require("../index.js"),
    _ = require("underscore"),
    should = require("should");

describe("BitSet", function(){

    describe("#set", function(){

        var i = 0;
        var bits = new BitSet();

        it("should set 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                bits.set(i);
            }
            (new Date().getTime() - begin).should.be.below(50);
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
            (new Date().getTime() - begin).should.be.below(50);
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            (new Date().getTime() - begin).should.be.below(50);
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
            (new Date().getTime() - begin).should.be.below(50);
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            (new Date().getTime() - begin).should.be.below(50);
            done();
        });

        
        it("should get 1 million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                (i & 1 ? bits.get(i) : !bits.get(i)).should.be.ok;
            }
            (new Date().getTime() - begin).should.be.below(700);
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
            (new Date().getTime() - begin).should.be.below(50);
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            (new Date().getTime() - begin).should.be.below(50);
            done();
        });

        it("should calculate cardinality fast", function(done){
            var begin = new Date().getTime();
            (bits.cardinality()).should.equal(500000);
            (new Date().getTime() - begin).should.be.below(50);
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
            (new Date().getTime() - begin).should.be.below(50);
            done();
        });

        it("should clear half a million times fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 2){
                bits.clear(i);
            }
            (new Date().getTime() - begin).should.be.below(50);
            done();
        });

        it("should nextSetBit fast", function(done){
            var begin = new Date().getTime();
            for(var i = 0; i < 1000000; i += 1){
                (bits.nextSetBit(i)).should.equal(i & 1 ? i : i + 1);
            }
            (new Date().getTime() - begin).should.be.below(700);
            done();
        });
    });
});
"use strict"
class MyCollection {
    constructor() {
        this.elements = arguments
    }
    
    //entries
    entriesC = function(callback) {
        let res = [];
        for (let i = 0; i < this.elements.length; i++) {
            res.push(i, this.elements[i]);
        }
        return res;
    }
    
    //map
    mapC = function(callback) {
        let result = []
        for (let i = 0; i < this.elements.length; i++) {
            result.push(callback(this.elements[i]))
        }
        return result;
    }
    
    //foreach
    foreachC = function(callback) {
        if (callback && typeof callback === 'function') {
            for (let i = 0; i < this.elements.length; i++) {
                callback(this.elements[i]);
            }
        }
    }
    
    //some
    someC = function(callback) {
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) return true;
            else return false;
        }
    }
    
    //every
    everyC = function(callback) {
        let res = 0;
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) {
                res = 1;
            }
            if (res == 1)
            return true;
            else return false;
        }
    }
    
    //indexof
    indexofC = function(callback) {
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i] == callback) {
                return i;
            }
        }
    }
    //filter
    filterC = function(callback) {
        let result = [];
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) {
                result.push(this.elements[i])
            }
        }
        return result;
    }
    
    //lastindexof
    lastindexofC = function(callback) {
        for (let i = this.elements.length - 1;; i--) {
            if (this.elements[i] == callback) {
                return i;
            }
        }
    }

    
    //findindex
    findindexC = function(callback) {
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i]))
            return i;
        }
    }
    
    //from ??
    fromC = function(callback) {
        let res = []
        for (let i = 0; i < this.elements.length; i++) {
            res.push(this.elements[i])
        }
        return res;
    }
    
    //find 
    findC = function(callback) {
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i]))
                return this.elements[i];
        }
    }
    //includes
    includesC = function(callback) {
        let res = 0
        for (let i = 0; i < this.elements.length; i++) {
            if (callback == this.elements[i]) {
                res = 1;
            }
        }
        if (res == 1) {
            return true;
        } else
            return false
    }

    //keys
    keysC = function(callback) {
        let res = [];
        for (let i = 0; i < this.elements.length; i++) {
            res.push(i);
        }
        return res;
    }

}
let myCollection = new MyCollection("Face", "control", 574577560916);
let arr = [1, 2, 3, 4, 5];

let res = arr.findIndex(x => {
        return x > 3;
    })

let res1 = myCollection.findindexC(x => {
        return x > 3;
    })

let str = "face control"
let res5 = []
for (let i = 0; i < str.length; i++) {
    res5 += str[i].split("")
}

let res2 = myCollection.entriesC()
console.log(res2)
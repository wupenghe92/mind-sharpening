/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const p = {
        '2' : ['a', 'b', 'c'],
        '3' : ['d', 'e', 'f'],
        '4' : ['g', 'h', 'i'],
        '5' : ['j', 'k', 'l'],
        '6' : ['m', 'n', 'o'],
        '7' : ['p', 'q', 'r', 's'],
        '8' : ['t', 'u', 'v'],
        '9' : ['w', 'x', 'y', 'z']
    }
    const sets = [];
    for (let i=0; i<digits.length; i++) {
        sets.push(p[digits[i]]);
    }
    return cartesianProduct(sets);

    function cartesianProduct(sets) {

        if (sets.length === 0) return [];
        if (sets.length === 1) return sets[0].slice();

        if (sets.length === 2) {
            const res = [];
            const set1 = sets[0];
            const set2 = sets[1];
            for (let i=0; i<set1.length; i++) {
                for (let j=0; j<set2.length; j++) {
                    res.push(set1[i]+set2[j]);
                }
            }
            return res;
        }

        const prevSets = sets.slice(0, sets.length-1);
        const lastSet = sets[sets.length-1];
        const prevXProduct = cartesianProduct(prevSets);
        return cartesianProduct([prevXProduct, lastSet]);
    }

};


var letterCombinations = function(digits) {
    if(digits.length < 1) return [];
    const phoneHash = {"2": ["a","b","c"], "3": ["d","e","f"], "4": ["g","h","i"], "5": ["j","k","l"], "6": ["m","n","o"], "7":["p","q","r","s"], "8": ["t","u","v"], "9": ["w","x","y","z"]};

    let output = phoneHash[digits[0]];
    for(let i = 1; i < digits.length; i++){
        let current = [];
        for(let j = 0; j < output.length; j++){
            for(let k = 0; k < phoneHash[digits[i]].length; k++){
                current.push(output[j] + phoneHash[digits[i]][k]);
            }
        }
        output = current;
    }

    return output
};

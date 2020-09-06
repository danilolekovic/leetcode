/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var uniques = [];
    var trash = [];
    
    for (var i = 0; i < s.length; i++) {
        if (!uniques.includes(s[i])) {
            uniques.push(s[i]);
        } else {
            uniques.splice(uniques.indexOf(s[i]), 1);
            trash.push(s[i]);
        }
    }
    
    for (var i = 0; i < trash.length; i++) {
        if (uniques.includes(trash[i])) {
            uniques.splice(uniques.indexOf(trash[i]), 1);
        }
    }

    return uniques.length > 0 ? s.indexOf(uniques[0]) : -1;
};

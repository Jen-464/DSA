/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteArr = ransomNote.split("");
    let magazineArr = magazine.split("");

    for(let i = 0; i < ransomNoteArr.length; i++) {
        let currentChar = ransomNoteArr[i];
        let isValid = magazineArr.includes(currentChar);
        if(isValid) {
            let foundChar = magazineArr.indexOf(currentChar);
            magazineArr.splice(foundChar, 1);
        }
        else return false;
    }
    return true;
};

module.exports = canConstruct;
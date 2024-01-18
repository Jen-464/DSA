/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    if (s.length % 2 == 1) return false;

    let stack = []
    let openCharacters = "([{";
    for (character of s) {
        if (openCharacters.includes(character)) stack.push(character)
        else if (stack.length == 0) return false
        else {
            let poppedValue = stack.pop();
            let poppedAsciiValue = poppedValue.charCodeAt(0);
            let currentCharAsciiValue = character.charCodeAt(0);
            if (character == ")") {
                var isCorrectOrder = poppedAsciiValue + 1 == currentCharAsciiValue;
            }
            else {
                var isCorrectOrder = poppedAsciiValue + 2 == currentCharAsciiValue;
            }
            if (!isCorrectOrder) return false;
        }
    }
    if (stack.length > 0) return false;
    return true;
}

module.exports = isValid;
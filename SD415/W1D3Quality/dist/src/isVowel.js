export function isVowel(char) {
    if (char.length !== 1) {
        return false;
    }
    char = char.toString();
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        return true;
    }
    return false;
}

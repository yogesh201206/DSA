var isAnagram = function(s, t) {
     if (s.length !== t.length) return false;

    const charCount = {};

    // Count frequencies in first string
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Decrement frequencies using second string
    for (let char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
};
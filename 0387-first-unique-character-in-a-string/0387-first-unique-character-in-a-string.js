var firstUniqChar = function(s) {

    const charCount = new Map();
    
    // First pass: count frequency of each character
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Second pass: find first character with count === 1
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
};
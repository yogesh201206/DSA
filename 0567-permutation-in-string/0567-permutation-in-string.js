/**
 * Checks if s2 contains any permutation of s1
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    // Edge case: if s1 is longer than s2, impossible
    if (s1.length > s2.length) return false;

    // Frequency arrays for 'a' to 'z'
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    // Helper to map char to index (0-25)
    const charIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

    // Fill initial frequency for s1 and first window in s2
    for (let i = 0; i < s1.length; i++) {
        freq1[charIndex(s1[i])]++;
        freq2[charIndex(s2[i])]++;
    }

    // Count matches between freq1 and freq2
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (freq1[i] === freq2[i]) matches++;
    }

    // Sliding window over s2
    for (let right = s1.length; right < s2.length; right++) {
        if (matches === 26) return true; // Found a permutation

        const indexIn = charIndex(s2[right]); // char entering window
        const indexOut = charIndex(s2[right - s1.length]); // char leaving window

        // Add new char
        freq2[indexIn]++;
        if (freq2[indexIn] === freq1[indexIn]) {
            matches++;
        } else if (freq2[indexIn] === freq1[indexIn] + 1) {
            matches--;
        }

        // Remove old char
        freq2[indexOut]--;
        if (freq2[indexOut] === freq1[indexOut]) {
            matches++;
        } else if (freq2[indexOut] === freq1[indexOut] - 1) {
            matches--;
        }
    }

    return matches === 26;
}

// Example usage:
console.log(checkInclusion("ab", "eidbaooo")); // true ("ba" is a permutation)
console.log(checkInclusion("ab", "eidboaoo")); // false

var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Skip non-alphanumeric characters from the right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare characters case-insensitively
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

function isAlphanumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}   
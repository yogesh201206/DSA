var rotate = function(nums, k) {
    // Handle cases where k is larger than array length
    k = k % nums.length;
    if (k === 0) return;

    // Helper function to reverse a portion of the array
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    // Step 1: Reverse the entire array
    reverse(0, nums.length - 1);
    // Step 2: Reverse the first k elements
    reverse(0, k - 1);
    // Step 3: Reverse the remaining n-k elements
    reverse(k, nums.length - 1);
};   
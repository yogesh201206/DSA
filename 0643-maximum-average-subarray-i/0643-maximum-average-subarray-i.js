var findMaxAverage = function(nums, k) {
    // Step 1: Calculate sum of the first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    let maxSum = windowSum;
    
    // Step 2: Slide the window across the rest of the array
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    // Step 3: Return the maximum average
    return maxSum / k;
};   
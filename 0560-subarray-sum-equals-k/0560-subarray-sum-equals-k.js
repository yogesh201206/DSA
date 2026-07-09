var subarraySum = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    const prefixSumMap = new Map();
    

    prefixSumMap.set(0, 1);

    for (let num of nums) {
        currentSum += num;
        
        // If (currentSum - k) exists, it means there are subarrays ending here with sum k
        if (prefixSumMap.has(currentSum - k)) {
            count += prefixSumMap.get(currentSum - k);
        }
        
        // Update the frequency of the current prefix sum
        prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
    }
    
    return count;
};   
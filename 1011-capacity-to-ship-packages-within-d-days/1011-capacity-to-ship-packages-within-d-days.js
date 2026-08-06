var shipWithinDays = function (weights, days) {

    const check = (capacity) => {
        let daysNeeded = 1;
        let curr = 0;

        for (let w of weights) {
            (curr + w > capacity) ? (daysNeeded++, curr = w)
                : curr += w;
        }

        return daysNeeded <= days;
    }

    let left = Math.max(...weights)
    let right = weights.reduce((a, b) => a + b, 0)

    while (left < right) {
        let mid = ((left + right) / 2) | 0;
        
        check(mid) ? (right = mid) 
            : (left = mid + 1);
    }

    return left;
};
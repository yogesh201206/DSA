var minEatingSpeed = function(piles, h) {
    let l = 1, r = Math.max(...piles);
    let ans = r;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours <= h) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
};
const predictTheWinner = A => {
    const n = A.length;
    if (!(n & 1)) return true;

    let f = new Int32Array(n);

    for (let i = n - 1; i >= 0; i--) {
        f[i] = A[i];
        for (let j = i + 1; j < n; j++)
            f[j] = Math.max(A[i] - f[j], A[j] - f[j - 1]);
    }

    return f[n - 1] >= 0;
};
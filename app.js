function expo(a, b) {
    if (isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b)) { return NaN; }
    let ans = 1;
    while (b > 0) {
        if (b%2 === 1) {
            ans *= a;
        }
        a *= a;
        b = Math.floor(b/2);
    }
    return ans;
}

module.exports.expo = expo;

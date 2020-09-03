export function expo(a: number, b: number) : number {
    if (!isFinite(a) || !isFinite(b)) { return NaN; }
    let ans : number = 1;
    while (b > 0) {
        if (b%2 === 1) {
            ans *= a;
        }
        a *= a;
        b = Math.floor(b/2);
    }
    return ans;
}

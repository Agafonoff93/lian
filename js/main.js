let A = [25, 23, 38, 18, 36, 42, 17, 4, 9, 4, 7];
console.log(A[1]);

let n = 0;
let s = 1;
for (i=0; i<11; i++) {
    if (A[i] < A[n]) {
t = A[i];
A[i] = A[n];
A[n] = t;
s = s * i;
}
}

console.log(s);

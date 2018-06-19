// Complete the consecutive function below.
function consecutive(num) {
    let res = 0;
    let div = 2;
    let mid, start;
    while ((1+div)*div/2 <= num) {
        mid = Math.floor(num/div);
        start = mid - Math.floor((div+1)/2) + 1;
        if (start <= 0) break;
        // console.log(div, start, (start + start + div -1)*div/2 );
        if (num === (start + start + div -1)*div/2 ) res++;
        div++;
    }
    return res;
}


console.log(consecutive(21));
// console.log(consecutive(250));
console.log(consecutive(10));

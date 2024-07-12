function solution(arr, divisor) {
  var answer = [];
  arr.forEach((n) => {
    if (!(n % divisor)) {
      answer.push(n);
    }
  });
  if (answer.length == 0) answer.push(-1);
  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));

//다른 풀이
function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

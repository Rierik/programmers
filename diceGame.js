//https://school.programmers.co.kr/learn/courses/30/lessons/181916
function solution(a, b, c, d) {
  var answer = 0;

  const diceNumArr = [a, b, c, d];

  const countMap = {};

  let sameNumCount = 0;
  for (let num of diceNumArr) {
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  sameNumCount = Math.max(...Object.values(countMap));

  if (sameNumCount == 4) {
    answer = a * 1111;
  } else if (sameNumCount == 3) {
    const threeOccuredNum = Object.keys(countMap).find((key) => countMap[key] === sameNumCount);
    const oneOccurredNum = Number(Object.keys(countMap).filter((key) => countMap[key] !== sameNumCount));

    answer = (10 * threeOccuredNum + oneOccurredNum) ** 2;
  } else if (sameNumCount == 2 && Object.keys(countMap).length == 2) {
    const twoSameNumArr = Object.keys(countMap);

    answer = twoSameNumArr.reduce((a, c) => {
      a = Number(a);
      c = Number(c);

      return (a + c) * Math.abs(a - c);
    });
  } else if (sameNumCount == 2 && Object.keys(countMap).length == 3) {
    const oneOccurredList = Object.keys(countMap).filter((key) => countMap[key] !== sameNumCount);
    answer = oneOccurredList.reduce((a, c) => (a *= c));
  } else {
    const sortDiceNum = diceNumArr.sort();
    answer = sortDiceNum[0];
  }
  console.log(answer);
  return answer;
}

solution(2, 2, 2, 2);
solution(4, 1, 4, 4);
solution(6, 3, 6, 3);
solution(2, 5, 2, 6);
solution(2, 4, 5, 7);

//다른 풀이
function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  if (a === b && a === c) return (10 * a + d) ** 2;
  if (a === b && a === d) return (10 * a + c) ** 2;
  if (a === c && a === d) return (10 * a + b) ** 2;
  if (b === c && b === d) return (10 * b + a) ** 2;

  if (a === b && c === d) return (a + c) * Math.abs(a - c);
  if (a === c && b === d) return (a + b) * Math.abs(a - b);
  if (a === d && b === c) return (a + b) * Math.abs(a - b);

  if (a === b) return c * d;
  if (a === c) return b * d;
  if (a === d) return b * c;
  if (b === c) return a * d;
  if (b === d) return a * c;
  if (c === d) return a * b;

  return Math.min(a, b, c, d);
}

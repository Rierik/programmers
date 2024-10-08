function solution(s) {
  var answer = '';
  if (s.length % 2 != 0) {
    answer = s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
  } else {
    answer = s.slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
  }
  return answer;
}

//다른풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

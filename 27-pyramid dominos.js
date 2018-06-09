//brutal force approach
/**
  * @param {Array, length 12, number 0-9, representing 6 dominos} arr
  * @return {Yes/No}           position
        [3, 4]                    0
     [2, 3][4, 5]                1,2
  [1, 2][3, 4][5, 6]            3,4,5

*/

function solution(arr) {
  if (!checkTwoIdentical(arr)) return 'NO';
  if (uniqueNums(arr) > 6) return 'NO';
  return brutalForce(arr);
}


function checkTwoIdentical(arr) {
  for (let i=0; i<10; i+=2) {
    let d11 = arr[i];
    let d12 = arr[i+1];
    for (let j=i+2; j<12; j+=2) {
      let d21 = arr[j];
      let d22 = arr[j+1];
      if (d11 === d21 && d12 === d22) return true;
      if (d11 === d22 && d12 === d21) return true;
    }
  }
  return false;
}

function uniqueNums(arr) {
  const buffer = {};
  for (let i=0; i<12; i++) {
    buffer[arr[i]] = true;
  }
  return Object.keys(buffer).length;
}


function brutalForce(arr) {
  const dominos = [];
  for (let i=0; i<12; i+=2) {
    let d = [arr[i], arr[i+1]];
    dominos.push(d);
  }
  const allPositions = permutation([0,1,2,3,4,5])
  for (let k=0; k<allPositions.length; k++) {
    const pos = allPositions[k];
    if (all_possibilities_for_this_position(pos)) return 'YES';
  }

  return 'NO';


  function all_possibilities_for_this_position(pos) {
    for (let i=0; i<64; i++) {
      const eachCase = Array(6);
      let b = i.toString(2);
      if (b.length < 6) {
        b = ('0').repeat(6-b.length) + b;
      }
      for (let j=0; j<b.length; j++) {
        if (b[j] === '0') {
          eachCase[pos[j]] = [dominos[j][0], dominos[j][1]];
        } else { //b[j] === '1'
          eachCase[pos[j]] = [dominos[j][1], dominos[j][0]];
        }

      }
      //check if the eachCase is legit
      let res = checkPyramid(eachCase);
      if (res) return true;
    }
    return false;
  }

}

function checkPyramid(eachCase) {
  if (eachCase[1][0] !== eachCase[3][1]) return false;
  if (eachCase[2][1] !== eachCase[5][0]) return false;

  if (eachCase[0][0] !== eachCase[1][1]) return false;
  if (eachCase[0][1] !== eachCase[2][0]) return false;

  if (eachCase[0][0] !== eachCase[4][0]) return false;
  if (eachCase[0][1] !== eachCase[4][1]) return false;


  return true;
}

/**
  * @param {Array, length 12, number 0-9, representing 6 dominos} arr
  * @return {Yes/No}           position
        [3, 4]                    0
     [2, 3][4, 5]                1,2
  [1, 2][3, 4][5, 6]            3,4,5

*/

function permutation(arr) {
  if (arr.length <= 1) return [arr];
  const permsArr = [];
  const first = arr[0];
  const restPerms = permutation(arr.slice(1));
  restPerms.forEach((perm) => {
    for (let i=0; i<=perm.length; i++) {
      const newPerm = [].concat(perm.slice(0,i), first, perm.slice(i));
      permsArr.push(newPerm);
    }
  });
  return permsArr;
}

console.log(solution([1,2,3,4,5,6,2,3,3,4,4,5]));

function makeSplit(arr, num = 200) {
  let result = [];
  let temp = [];
  let curNum = 0;
  arr.forEach((item) => {
    if (curNum > num) {
      result.push(temp);
      curNum = 0;
      temp = [];
    }
    temp.push(item);
    curNum += item.length;
  });
  return result;
}
function saveFile(content, filePath) {}
module.exports = { makeSplit };

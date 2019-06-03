function checkArray (array) {
  const length = array.length;
  const marks = new Array(length);
  marks.fill(true);

  for (let i = 0; i < length; i++) {
    if (!marks[i]) {
      continue;
    }
    const v = array[i];
    // 是否有效, 0 - 无效， 1-9 有效
    if (!v) {
      marks[i] = false;
      continue;
    }

    // 是否重复 i+1 ~ 9 是否和 i 位置的数据重复
    for (let j = i + 1; j < length - 1; j++) {
      if (v === array[j]) {
        marks[j] = marks[i] = false;
      }
    }
  }

  return marks;
}
console.log(checkArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(checkArray([1, 2, 3, 4, 0, 6, 7, 8, 9]));
console.log(checkArray([1, 2, 3, 4, 0, 6, 2, 8, 9]));
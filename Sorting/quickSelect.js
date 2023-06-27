

/*
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
function topK(arr, k) {
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function quickSelect(start, end, target) {
    if (start >= end) {
      return start;
    }

    let pivot = start + Math.floor(Math.random() * (end - start));
    let pivotNum = arr[pivot];
    let store = start;

    swap(pivot, end);

    for (let i = start; i <= end; i++) {
      if (arr[i] < pivotNum) {
        swap(i, store++);
      }
    }

    swap(end, store);

    if (store < target) {
      return quickSelect(store + 1, end, target);
    } else if (store > target) {
      return quickSelect(start, store - 1, target);
    }

    return target;
  }

  const index = quickSelect(0, arr.length - 1, arr.length - k);
  const answer = arr.slice(index).sort((a, b) => b - a);

  return answer;
}

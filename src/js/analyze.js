function analyzeArray(arr) {
  const sum = arr.reduce((acc, elem) => acc + elem);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = analyzeArray;

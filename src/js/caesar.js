function caesar(str, num) {
  const array = [...str];

  const numberArray = array.map((elem) => elem.toLowerCase().charCodeAt() - 96);

  const newArray = numberArray.map((elem) => elem + num);

  const checkArray = newArray.map((elem) => {
    if (elem < 1) {
      return 26 + elem;
    }
    if (elem > 26) {
      return elem - 26;
    }
    return elem;
  });

  const result = checkArray
    .map((elem, index) => {
      if (!str[index].match(/[a-z]/i)) {
        return str[index];
      }
      if (str[index] === str[index].toUpperCase())
        return String.fromCharCode(elem + 96).toUpperCase();

      return String.fromCharCode(elem + 96);
    })
    .join('');
  return result;
}

module.exports = caesar;

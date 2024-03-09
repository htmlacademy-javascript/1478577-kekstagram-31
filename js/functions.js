const checkString = (string, length) => string.length <= length;

console.log (checkString ('провер', 10));


const checkPalindrom = (string) => {
  if (!string?.trim().length) {
    return false;
  }

  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = normalizeString.split('').reverse().join('');
  return normalizeString === reverseString;
};

console.log (checkPalindrom ('топо'));

const returnsNumbers = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt (result, 10);
};

console.log (returnsNumbers ('2023 год'));

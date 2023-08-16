module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const dozen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  const numero = String(number);

if (number === 0) {
    return 'zero';
};

if (number >= 1 && number <= 9) {
    return ones[number];
};

if (number >= 10 && number <= 19) {
    return tens[Number(numero[1])];
};

if (number >= 20 && number <100) {
    if (number % 10 === 0) {
    return dozen[number/10];
    }
    else {
    return (dozen[Number(numero[0])] + ' ' + ones[Number(numero[1])]).trim();
    }
};

if (number >= 100) {
    if (number % 100 === 0) {
    return hundreds[number/100];
    }
    else if (Number(numero[1]) === 1) {
    return (hundreds[Number(numero[0])] + ' ' + tens[Number(numero[2])]);
    }
    else if (Number(numero[1]) === 0){
    return (hundreds[Number(numero[0])] + ' ' + ones[Number(numero[2])]).trim()
    }
    else {
    return (hundreds[Number(numero[0])] + ' ' + dozen[Number(numero[1])] + ' ' + ones[Number(numero[2])]).trim()
    }
};

 


















}
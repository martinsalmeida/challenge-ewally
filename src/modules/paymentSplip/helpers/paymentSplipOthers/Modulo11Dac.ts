export const Modulo11Dac = (code: string) => {
  let initialNumber = 2;

  let sum = code
    .split('')
    .reverse()
    .reduce((acc, item) => {
      let digit = Number(item) * initialNumber;

      if (digit > 9) {
        let number = String(digit);
        digit = Number(number[0]) + Number(number[1]);
      }

      initialNumber = initialNumber === 10 ? 2 : initialNumber;

      initialNumber++;

      return acc + digit;
    }, 0);

  let dv = sum % 11;

  return String(dv);
};

export const Modulo10Dac = (code: string) => {
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

      initialNumber = initialNumber === 2 ? 1 : 2;

      return acc + digit;
    }, 0);

  let dv = 10 - (sum % 10);

  return String(dv === 10 ? 0 : dv);
};

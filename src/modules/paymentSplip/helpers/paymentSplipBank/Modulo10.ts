export const Modulo10 = (code: string) => {
  let initialNumber = 2;

  let soma = code
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

  //   let dv = 10 - (soma % 10);
  let dv = Math.ceil(soma / 10) * 10 - soma;

  return String(dv === 10 ? 0 : dv);
};

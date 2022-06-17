export const getAmountBank = (line: string) => {
  if (line.length === 47) {
    return parseFloat(
      line.substring(line.length - 10).replace(/(\d)(\d{2})$/g, '$1.$2')
    ).toString();
  }
};

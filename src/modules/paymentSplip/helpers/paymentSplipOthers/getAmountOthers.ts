export const getAmountOthers = (line: string) => {
  if (line.length === 44) {
    return parseFloat(
      line.substring(4, 15).replace(/(\d)(\d{2})$/g, '$1.$2')
    ).toString();
  }
};

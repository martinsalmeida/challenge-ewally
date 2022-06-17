export function convertLineToBarCodeOthers(line: string) {
  let barCode = '';
  for (let index = 0; index < 4; index++) {
    const start = 11 * index + index;
    const end = 11 * (index + 1) + index;
    barCode += line.substring(start, end);
  }
  return barCode;
}

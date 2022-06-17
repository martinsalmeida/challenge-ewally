export function convertLineToBarCodeBank(line: string) {
  let barCode = '';
  barCode += line.substring(0, 3);
  barCode += line.substring(3, 4);
  barCode += line.substring(32, 33);
  barCode += line.substring(33, 47);
  barCode += line.substring(4, 9);
  barCode += line.substring(10, 20);
  barCode += line.substring(21, 31);
  return barCode;
}

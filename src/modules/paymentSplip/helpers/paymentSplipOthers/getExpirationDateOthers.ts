export function getExpirationDateOthers(line: string) {
  const day = line.substring(25, 27);
  const month = line.substring(23, 25);
  const year = line.substring(19, 23);

  let expirationDate;

  if (Number(day) > 31 || Number(month) > 12) {
    return (expirationDate = '');
  }

  return (expirationDate = `${year}-${month}-${day}`);
}

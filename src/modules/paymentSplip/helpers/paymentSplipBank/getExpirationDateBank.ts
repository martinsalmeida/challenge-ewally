export function getExpirationDateBank(line: string) {
  const fatorDataVenc = Number(line.substring(33, 37));

  const date = new Date(1997, 9, 7);

  date.setDate(date.getDate() + fatorDataVenc);

  const expirationDate = `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;

  return expirationDate;
}

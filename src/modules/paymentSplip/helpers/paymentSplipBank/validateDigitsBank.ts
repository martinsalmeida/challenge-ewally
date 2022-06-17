import { AppError } from "../../../../utils/appError";
import { Modulo10 } from "./Modulo10";

export function validateDigitsBank(line: string) {
  // para linha digitável: AAABC.CCCCX DDDDD.DDDDDY EEEEE.EEEEEZ K UUUUVVVVVVVVVV

  const group = {
    field1: line.substring(0, 9),
    dv1: line.substring(9, 10),
    field2: line.substring(10, 20),
    dv2: line.substring(20, 21),
    field3: line.substring(21, 31),
    dv3: line.substring(31, 32),
  };

  const resultDigit1 = Modulo10(group.field1);
  const resultDigit2 = Modulo10(group.field2);
  const resultDigit3 = Modulo10(group.field3);

  if (
    group.dv1 !== resultDigit1 ||
    group.dv2 !== resultDigit2 ||
    group.dv3 !== resultDigit3
  ) {
    throw new AppError("Digitos verificadores inválidos", 400);
  }
}

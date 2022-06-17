import { AppError } from "../../../../utils/appError";
import { Modulo10Dac } from "./Modulo10Dac";
import { Modulo11Dac } from "./Modulo11Dac";

export function validateDigitsOthers(line: string) {
  // para linha digitável: 84630000001-1 19990162202-7 20610010000-0 00310657541-2

  const group = {
    field1: line.substring(0, 11),
    dv1: line.substring(11, 12),
    field2: line.substring(12, 23),
    dv2: line.substring(23, 24),
    field3: line.substring(24, 35),
    dv3: line.substring(35, 36),
    field4: line.substring(36, 47),
    dv4: line.substring(47, 48),
  };

  let resultDigit1;
  let resultDigit2;
  let resultDigit3;
  let resultDigit4;

  const coinCode = line.substring(2, 3);

  if (coinCode === "6" || coinCode === "7") {
    resultDigit1 = Modulo10Dac(group.field1);
    resultDigit2 = Modulo10Dac(group.field2);
    resultDigit3 = Modulo10Dac(group.field3);
    resultDigit4 = Modulo10Dac(group.field4);
  }

  if (coinCode === "8" || coinCode === "9") {
    resultDigit1 = Modulo11Dac(group.field1);
    resultDigit2 = Modulo11Dac(group.field2);
    resultDigit3 = Modulo11Dac(group.field3);
    resultDigit4 = Modulo11Dac(group.field4);
  }

  if (
    group.dv1 !== resultDigit1 ||
    group.dv2 !== resultDigit2 ||
    group.dv3 !== resultDigit3 ||
    group.dv4 !== resultDigit4
  ) {
    throw new AppError("Dígitos verificadores inválidos", 400);
  }
}

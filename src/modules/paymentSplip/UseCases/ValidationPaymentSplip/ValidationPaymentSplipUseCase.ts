import { getExpirationDateBank } from "../../helpers/paymentSplipBank/getExpirationDateBank";
import { getExpirationDateOthers } from "../../helpers/paymentSplipOthers/getExpirationDateOthers";
import { getAmountBank } from "../../helpers/paymentSplipBank/getAmountBank";
import { validateDigitsOthers } from "../../helpers/paymentSplipOthers/validateDigitsOthers";
import { validateDigitsBank } from "../../helpers/paymentSplipBank/validateDigitsBank";
import { validateLine } from "../../helpers/validateLine";
import { convertLineToBarCodeBank } from "../../helpers/paymentSplipBank/convertLineToBarCodeBank";
import { convertLineToBarCodeOthers } from "../../helpers/paymentSplipOthers/convertLineToBarCodeOthers";
import { getAmountOthers } from "../../helpers/paymentSplipOthers/getAmountOthers";

export class ValidationPaymentSplipUseCase {
  execute(line: string) {
    const lineValidated = validateLine(line);
    const LINE_LENGHT_BANK = 47;
    const LINE_LENGHT_OTHERS = 48;

    if (lineValidated === LINE_LENGHT_BANK) {
      validateDigitsBank(line);

      const barCode = convertLineToBarCodeBank(line);
      const amount = getAmountBank(line);
      const expirationDate = getExpirationDateBank(line);

      return { barCode, amount, expirationDate };
    }

    if (lineValidated === LINE_LENGHT_OTHERS) {
      validateDigitsOthers(line);

      const barCode = convertLineToBarCodeOthers(line);
      const amount = getAmountOthers(barCode);
      const expirationDate = getExpirationDateOthers(barCode);

      return { barCode, amount, expirationDate };
    }
  }
}

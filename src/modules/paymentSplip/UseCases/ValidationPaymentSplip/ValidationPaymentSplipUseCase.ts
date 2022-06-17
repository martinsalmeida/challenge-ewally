import { getExpirationDateBank } from "../../helpers/paymentSplipBank/getExpirationDateBank";
import { getExpirationDateOthers } from "../../helpers/paymentSplipOthers/getExpirationDateOthers";
import { getAmountBank } from "../../helpers/paymentSplipBank/getAmountBank";
import { validateDigitsOthers } from "../../helpers/paymentSplipOthers/validateDigitsOthers";
import { validateDigitsBank } from "../../helpers/paymentSplipBank/validateDigitsBank";
import { validateLineBank } from "../../helpers/paymentSplipBank/validateLineBank";
import { convertLineToBarCodeBank } from "../../helpers/paymentSplipBank/convertLineToBarCodeBank";
import { convertLineToBarCodeOthers } from "../../helpers/paymentSplipOthers/convertLineToBarCodeOthers";
import { getAmountOthers } from "../../helpers/paymentSplipOthers/getAmountOthers";

export class ValidationPaymentSplipUseCase {
  execute(line: string) {
    const lineLenght = validateLineBank(line);

    if (lineLenght === 47) {
      validateDigitsBank(line);

      const barCode = convertLineToBarCodeBank(line);
      const amount = getAmountBank(line);
      const expirationDate = getExpirationDateBank(line);

      return { barCode, amount, expirationDate };
    }

    if (lineLenght === 48) {
      validateDigitsOthers(line);

      const barCode = convertLineToBarCodeOthers(line);
      const amount = getAmountOthers(barCode);
      const expirationDate = getExpirationDateOthers(barCode);

      return { barCode, amount, expirationDate };
    }
  }
}

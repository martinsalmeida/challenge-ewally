import { AppError } from "../../../../utils/appError";

export const validateLineBank = (line: string) => {
  const ONLY_NUMBERS = /^\d+$/;

  const checkNumbersOnly = ONLY_NUMBERS.test(line);

  if (!checkNumbersOnly) {
    throw new AppError("Somente números são aceitos", 400);
  }

  const lineLength = line.length;

  if (lineLength < 47 || lineLength > 48) {
    throw new AppError(
      `Código digitado possui: ${lineLength} caracter(es). Ele deve ter 47 ou 48 caracteres`,
      400
    );
  }

  return lineLength;
};

import { AppError } from "../../../utils/appError";
import { validateLine } from "./validateLine";

let line1 = "033998216796710102179920050201019289400000028103";
let line2 = "10497271728680011964522840403525390260000117388";

describe("validade line bank", () => {
  it("shoud be able a 47 caracter", () => {
    expect(validateLine(line2)).toBe(47);
  });

  it("shoud be able a 48 caracter", () => {
    expect(validateLine(line1)).toBe(48);
  });
});

describe("validade line bank only with numbers", () => {
  it("shoud be able instanceof AppError", async () => {
    expect(async () => {
      let line3 = "1049727172868001196452284040352539026000011738a";
      await validateLine(line3);
    }).rejects.toBeInstanceOf(AppError);
  });
});

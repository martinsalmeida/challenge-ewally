import { validateLineBank } from "./validateLineBank";

let line = "033998216796710102179920050201019289400000028103";

type VLine = {
  validLine: number;
};

let validLine = 0;

describe("validade line bank", () => {
  it("shoud be able a valid line", () => {
    validLine = validateLineBank(line);
  });

  expect(validLine);
});
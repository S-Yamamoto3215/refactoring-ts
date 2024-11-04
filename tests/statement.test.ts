import { statement } from "../src/functions/statement";
import { invoice, plays, customer } from "../src/types";

describe("statement", () => {
  const plays: plays = {
    "hamlet": { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As You Like It", type: "comedy" },
    "othello": { name: "Othello", type: "tragedy" }
  };

  const invoice: invoice = {
    customer: "BigCo",
    performances: [
      { playID: "hamlet", audience: 55 },
      { playID: "as-like", audience: 35 },
      { playID: "othello", audience: 40 }
    ]
  };

  it("should return the correct statement for the given invoice and plays", () => {
    const result = statement(invoice, plays);
    const expected = `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits`;
    expect(result).toBe(expected);
  });
});

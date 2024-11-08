import { plays, invoice } from "./types";

export const playsData: plays = {
  "hamlet":  { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  "othello": { name: "Othello", type: "tragedy" },
};

export const invoicesData: invoice[] = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];

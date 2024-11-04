export type playType = "tragedy" | "comedy" | "othello";

export type play = {
  name: string;
  type: playType;
};

export type plays = {
  [key: string]: play;
}

export type performance = {
  playID: string;
  audience: number;
}

export type invoice = {
  customer: customer["name"];
  performances: performance[];
};

export type customer = {
  name: string;
};

export type statementData = {
  customer: customer["name"];
  performances: performance[];
};

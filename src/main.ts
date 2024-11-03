import { playsData, invoicesData } from "./data";
import { statement } from "./functions/statement";

const result = statement(invoicesData[0], playsData);
console.log(result);

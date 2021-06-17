// import { blockText } from "./tools";
const blockText = require("./tools/blockText");
require("colors");
// import colors from "colors";
console.log(blockText("abcdefghijklmnopqrstuvwxyz"));
console.log(blockText("abcdefghijklmnop"));
console.log(blockText("abcdefg 321654987").rainbow.bold);

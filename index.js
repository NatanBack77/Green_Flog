const fs = require("node:fs")

const data=fs.readFileSync("./steamGames.json","utf-8")
const games= JSON.parse(data)
const item = games.find((item) => item.name === "The Apple");

console.log(item);
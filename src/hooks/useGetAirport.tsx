import * as fs from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamArray } from "stream-json/streamers/StreamArray";

const keyword = "Denpasar"; // Get search term from CLI

if (!keyword) {
  console.error("Usage: ts-node search-airports.ts <keyword>");
  process.exit(1);
}

const filePath = "./airports.json"; // your large JSON file

const pipeline = chain([
  fs.createReadStream(filePath),
  parser(),
  streamArray(),
]);

pipeline.on("data", ({ value }) => {
  const match =
    value.cityName?.toLowerCase().includes(keyword) ||
    value.airportName?.toLowerCase().includes(keyword);

  if (match) {
    console.log(`[${value.iataCode}] ${value.airportName} - ${value.cityName}`);
  }
});

pipeline.on("end", () => {
  console.log("🔍 Done searching.");
});

import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getAnswer = (filePath) => {
  const fullPath = path.resolve(__dirname, filePath);
  try {
    return fs
      .readFileSync(fullPath, {
        encoding: "utf8",
        flag: "r",
      })
      .replace(/([\S\s]*)\/\/ WRITE YOUR ANSWER BELOW THIS LINE/, "");
  } catch (e) {
    console.error(
      `Could not read the answer to "${fullPath}". Please check for Syntax errors.`
    );
    console.error(e);
  }
};

const readConsole = (callback) => {
  /**
   * @source https://gajus.medium.com/capturing-stdout-stderr-in-node-js-using-domain-module-3c86f5b1536d
   */
  let output = "";
  const originalStdoutWrite = process.stdout.write.bind(process.stdout);
  process.stdout.write = (chunk, encoding, callback) => {
    if (typeof chunk === "string") {
      output += chunk;
    }

    return originalStdoutWrite(chunk, encoding, callback);
  };
  callback();
  process.stdout.write = originalStdoutWrite;
  return output;
};

export { getAnswer, readConsole };

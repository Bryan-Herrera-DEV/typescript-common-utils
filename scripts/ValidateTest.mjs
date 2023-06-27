import path from "path";
import { globby } from "globby";

function validateFolderSpecialCharacters(filePath, fileName) {
  const regex = new RegExp(/[^a-zA-Z\.]/);
  if (regex.test(filePath)) {
    throw new Error(
      `Folder name '${filePath}' contains special characters. Please remove them.`
    );
  }
  if (regex.test(fileName)) {
    throw new Error(
      `File name '${fileName}' contains special characters. Please remove them.`
    );
  }
}

function validateFolderAndFileNames(filePath, fileName) {
  if (filePath === "src") {
    throw new Error("Folder name cannot be 'src'");
  }
  if (!fileName.toLowerCase().includes(".test.ts")) {
    throw new Error(
      `File name '${fileName}' does not contain '.test'. Please add it.`
    );
  }
  if (fileName.toLowerCase().split(".")[0] !== filePath.toLowerCase()) {
    throw new Error(
      `Folder name '${filePath}' does not match file name '${fileName}'`
    );
  }
}

function execute(filePaths) {
  for (let filepath of filePaths) {
    let filename = path.basename(filepath);
    filepath = path.dirname(filepath);
    filepath = filepath.replace("src/", "");
    filepath = filepath.split("/")[1];
    if (filepath && filename !== "index.ts") {
      validateFolderAndFileNames(filepath, filename);
    }
    if (filepath && filename === "index.ts") {
      validateFolderSpecialCharacters(filepath, filename);
    }
  }
  return filePaths;
}

// get paths of all .ts files - excluding node_modules, the .github folder, tests and config stuff
globby([
  "src/ArrayUtils/**/*.ts",
  "src/ClassUtils/**/*.ts",
  "src/InterfaceUtils/**/*.ts",
  "!(node_modules|.github)/**/*",
  "!**/test/**/*",
  "!*.config.ts",
])
  // create markdown content
  .then(execute);

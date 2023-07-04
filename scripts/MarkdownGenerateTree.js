// Copyright (c) 2023 The TypescriptCommonUtils Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file. See the AUTHORS file for names of contributors.

const fs = require('fs').promises;
const path = require('path');

/**
 * Get the size of a file
 * @param {string} filePath - The path of the file
 * @returns {string} The size of the file in bytes
 */
async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return `${stats.size} bytes`;
}

/**
 * Generate a README file with a project tree structure
 * @param {Object} config - The configuration object
 * @param {string} config.rootDir - The root directory of your project
 * @param {string} [config.outputPath] - The output path for the README.md file
 * @param {RegExp[]} [config.ignoreRegexArray] - An array of RegExp to ignore certain directories or files
 * @param {string} [config.startTag] - The start tag in the README.md to insert the project tree structure
 * @param {string} [config.endTag] - The end tag in the README.md to insert the project tree structure
 * @param {Object} [config.displayConfig] - The display configuration object
 * @param {string} [config.displayConfig.theme] - The theme of the project tree structure ('classic' | 'minimalist' | 'emoji' | 'tabulation')
 * @param {boolean} [config.displayConfig.showExtension] - Whether to show the file extension
 * @param {boolean} [config.displayConfig.showFileSize] - Whether to show the file size
 */
async function generateReadme({ rootDir, outputPath = path.join(rootDir, 'README.md'), ignoreRegexArray = [], startTag = "<!-- markdownlint-project-tree -->", endTag = "<!-- end-markdownlint-project-tree -->", displayConfig = {} }) {
  const defaultDisplayConfig = {
    theme: 'classic',
    showExtension: true,
    showFileSize: false
  };
  const mergedDisplayConfig = { ...defaultDisplayConfig, ...displayConfig };

  try {
    const tree = await generateTree(rootDir, ignoreRegexArray, mergedDisplayConfig);
    const readmeContent = generateReadmeContent(tree, mergedDisplayConfig);
    const currentReadmeContent = await fs.readFile(outputPath, 'utf-8');
    const updatedReadmeContent = insertIntoReadme(currentReadmeContent, readmeContent, startTag, endTag);
    await fs.writeFile(outputPath, updatedReadmeContent);
    console.log(`README.md generated successfully at ${outputPath}`);
  } catch (error) {
    console.error(`Failed to generate README.md: ${error}`);
  }
}

async function generateTree(dir, ignoreRegexArray, displayConfig) {
  const basename = path.basename(dir);

  if (ignoreRegexArray.some(regex => regex.test(basename))) {
    return null;
  }

  const stats = await fs.stat(dir);
  if (!stats.isDirectory()) {
    return {
      name: basename,
      type: 'file',
      extension: displayConfig.showExtension ? path.extname(dir) : '',
      size: displayConfig.showFileSize ? await getFileSize(dir) : ''
    };
  }

  const files = await fs.readdir(dir);
  const tree = {
    name: basename,
    type: 'directory',
    children: []
  };

  for (const file of files) {
    const filePath = path.join(dir, file);
    const childTree = await generateTree(filePath, ignoreRegexArray, displayConfig);
    if (childTree) {
      tree.children.push(childTree);
    }
  }

  return tree;
}

function generateReadmeContent(tree, displayConfig, indent = '') {
  if (!tree) {
    return '';
  }

  const name = tree.name;
  let content = `${indent}${getPrefix(tree.type, displayConfig.theme)} ${name}`; // TODO: FIX ${tree.extension} OF UNDEFINED

  if (tree.size) {
    content += ` (${tree.size})`;
  }

  content += '\n';

  if (tree.type === 'directory') {
    tree.children.forEach((child, index) => {
      const isLastChild = index === tree.children.length - 1;
      const childIndent = indent + (isLastChild ? '    ' : getIndent(tree.type, displayConfig.theme));
      content += generateReadmeContent(child, displayConfig, childIndent);
    });
  }

  return content;
}

function getPrefix(type, theme) {
  switch (theme) {
    case 'tabulation':
      return type === 'directory' ? '+-- ' : '|-- ';
    case 'minimalist':
      return type === 'directory' ? '+' : '-';
    case 'emoji':
      return type === 'directory' ? '📁 ' : '📄 ';
    case 'classic':
    default:
      return '|--';
  }
}

function getIndent(type, theme) {
  switch (theme) {
    case 'tabulation':
      return type === 'directory' ? '    ' : '|   ';
    case 'minimalist':
      return '   ';
    case 'emoji':
      return '    ';
    case 'classic':
    default:
      return '|   ';
  }
}

function insertIntoReadme(readmeContent, insertContent, startTag, endTag) {
  const startTagIndex = readmeContent.indexOf(startTag);
  const endTagIndex = readmeContent.indexOf(endTag);

  if (startTagIndex === -1 || endTagIndex === -1) {
    throw new Error(`Cannot find the start and end tags in README.md`);
  }

  const beforeTagContent = readmeContent.substring(0, startTagIndex + startTag.length);
  const afterTagContent = readmeContent.substring(endTagIndex);

  const wrappedInsertContent = `\n\n\`\`\`bash\n${insertContent}\n\`\`\`\n\n`;

  return beforeTagContent + wrappedInsertContent + afterTagContent;
}

const config = {
  rootDir: __dirname + '/../',
  ignoreRegexArray: [/node_modules/, /\.git/, /\.vscode/, /dist/, /coverage/, /\.husky/, /docs/, /scripts/, /test/, /\.tgz/],
  displayConfig: {
    theme: 'classic',
    showExtension: true, // TODO: FIX ${tree.extension} OF UNDEFINED
    showFileSize: false
  }
};

generateReadme(config);

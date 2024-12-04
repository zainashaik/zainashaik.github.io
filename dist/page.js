"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHTML = void 0;
const generateHTML = () => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Page</title>
    <link href="/styles.css" rel="stylesheet">
  </head>
  <body class="bg-gray-100 text-center">
    <h1 class="text-4xl text-blue-500">Welcome to My Dynamic Website</h1>
    <p class="mt-4 text-lg">This page is generated using TypeScript!</p>
  </body>
  </html>
`;
exports.generateHTML = generateHTML;
//# sourceMappingURL=page.js.map
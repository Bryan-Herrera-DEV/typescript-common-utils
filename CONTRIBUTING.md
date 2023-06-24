# Contribution guidelines
## Before contributing
Welcome to typescript-dev-utilsl! Before submitting your `pull requests`, be sure to read all the guidelines. If you have any questions about the contribution guidelines, don't hesitate to clearly state them in an issue.

## Contributing
We're excited for you to consider contributing to our TypeScript Utils library! This repository is intended to be a reference for TypeScript developers and students worldwide. By becoming one of our contributors, you agree and confirm that:

- **You have done your own work.** We do not tolerate plagiarism and will not merge any work that is plagiarized.
- **If you take code from another repository, you must give credit to the original author.** Include a comment in your code indicating where you originally took the code from.
- **Your work will be distributed under the MIT license once your pull request is merged.** You can read more about this license [here](https://opensource.org/licenses/MIT).
- **Your work must comply with our style and coding standards.** This includes using proper and clear TypeScript types, writing meaningful and detailed comments, and organizing the code in a readable and maintainable way.
- **New implementations are welcome.** For example, you can contribute new types/interfaces/implementations from advanced to complex.
- **Improvements to existing comments and tests are also welcome.** We want our code to be as clear and understandable as possible, and our tests to be complete and effective.

We look forward to seeing what you bring to our project!

## Contribution
We welcome any contributions, from fixing grammatical errors to implementing advanced TypeScript types and features.

If you make a pull request that resolves an open issue, please help keep our issues list manageable by adding fixes: #{$ISSUE_NO} to your commit. GitHub will use this tag to automatically close the issue when the PR is merged.

## Commit messages format
We prefer that you use the following format for your commits: (`<type>: <issue number> :emoji:`): short description. If you need to provide more information, include it in the detailed commit message.

For emojis, we recommend using the [gitmoji](https://gitmoji.dev/) list.

Types of commits may include (but are not limited to):

- docs: Changes that affect only the documentation.
- feat: A new feature.
- fix: A bug fix.
- test: Addition or correction of tests.
Examples:

feat: :sparkles: add quicksort algorithm.
fix: #123 :bug: correct incorrect error message.

## Tests
Asegúrate de que tu código funciona. Para ello, proporcionamos y utilizamos Jest para ejecutar pruebas unitarias en nuestras implementaciones. Escribe pruebas para las funciones que implementes para asegurarte de que funcionan correctamente, incluso después de múltiples cambios en el código.

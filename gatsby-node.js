const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const instructionTemplate = path.resolve(
    __dirname,
    'src',
    'templates',
    'instruction-template.js'
  );

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: fileAbsolutePath, order: ASC }
        filter: { frontmatter: { path: { ne: "/" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.error(result.errors);
      throw result.errors;
    }

    const instructions = result.data.allMarkdownRemark.edges;

    instructions.forEach((instruction, index) => {
      const next =
        index === instructions.length - 1 ? null : instructions[index + 1].node;
      const previous = index === 0 ? null : instructions[index - 1].node;

      createPage({
        path: instruction.node.frontmatter.path,
        component: instructionTemplate,
        context: {
          previous,
          next
        }
      });
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path === '/') {
    page.context.isRoot = true;
    createPage(page);
  }
};

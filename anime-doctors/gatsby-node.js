/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
      {
        allVolunteersJson {
          edges {
            node {
              slug
            }
          }
        }
        allQuestionsJson {
          nodes {
            slug
          }
        }
      }
    `)

    results.data.allVolunteersJson.edges.forEach(edge => {
      const voluntary = edge.node;

      createPage({
        path: `/voluntary/${voluntary.slug}/`,
        component: require.resolve("./src/templates/voluntary/voluntary.js"),
        context: {
          slug: voluntary.slug
        },
      });

    })

    results.data.allQuestionsJson.nodes.forEach(question => {

      createPage({
        path: `/question/${question.slug}/`,
        component: require.resolve("./src/templates/question/question.js"),
        context: {
          slug: question.slug
        },
      });

    })
  };

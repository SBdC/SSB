const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for blog artist
    const artistPage = path.resolve(`./src/templates/artist-page.js`)
    const programPage = path.resolve(`./src/templates/program-page.js`)

    // Define a template for kuenstlergruppe tags
    const kuenstlergruppeTemplate = path.resolve("src/templates/kuenstlergruppe.js")

    // Get all markdown blog artists sorted by date
    const result = await graphql(
        `
        {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  name
                  folder
                  kuenstlergruppe
                }
              }
            }
            tagsGroup: allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___kuenstlergruppe) {
                  fieldValue
                }
              }
          }
          
    `
    )

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your  artists pages`,
            result.errors
        )
        return
    }

    const artists = result.data.allMarkdownRemark.nodes
    console.log(artists)

    // Create blog artists pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    if (artists.length > 0) {
        artists.forEach((artist) => {
            if (artist.frontmatter.folder === 'program') {
                createPage({
                    path: `${artist.frontmatter.folder}${artist.fields.slug}`,
                    component: programPage,
                    context: {
                        id: artist.id,
                    }
                })
            }
            else {
                createPage({
                    path: `${artist.frontmatter.folder}${artist.fields.slug}`,
                    component: artistPage,
                    context: {
                        id: artist.id,
                    }
                })
            }



        })
    }

    // Extract kuenstlergruppe data from query
    const kuenstler = result.data.tagsGroup.group

    // Make kuenstlergruppe pages
    kuenstler.forEach(kuenstler => {
        createPage({
            path: `/kuenstlergruppe/${_.kebabCase(kuenstler.fieldValue)}/`,
            component: kuenstlergruppeTemplate,
            context: {
                tag: kuenstler.fieldValue,
            },
        })
    })


}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

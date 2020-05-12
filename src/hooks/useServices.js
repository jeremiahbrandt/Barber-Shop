import {useStaticQuery, graphql} from 'gatsby'

export const useServices = () => {
    const Services = useStaticQuery(
        graphql`
        query ServicesQuery {
            allFile(filter: {sourceInstanceName: {eq: "media"}, ext: {eq: ".md"}, name: {eq: "services"}}) {
              nodes {
                childMarkdownRemark {
                  frontmatter {
                    services
                  }
                }
              }
            }
          }
        `
    )
    return Services.allFile.nodes[0].childMarkdownRemark.frontmatter.services
}

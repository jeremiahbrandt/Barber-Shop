import {useStaticQuery, graphql} from 'gatsby'

export const useStars = () => {
    const Stars = useStaticQuery(
        graphql`
        query StarsQuery {
          allFile(filter: {sourceInstanceName: {eq: "stars"}, ext: {eq: ".md"}}, sort: {fields: childMarkdownRemark___frontmatter___index}) {
            edges {
                node {
                  childMarkdownRemark {
                    frontmatter {
                    image {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }     
        `
    )
    return Stars.allFile.edges
}
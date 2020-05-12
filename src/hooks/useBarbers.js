import {useStaticQuery, graphql} from 'gatsby'

export const useBarbers = () => {
    const Barbers = useStaticQuery(
        graphql`
        query BarbersQuery {
          allFile(filter: {sourceInstanceName: {eq: "barbers"}, ext: {eq: ".md"}}, sort: {fields: childMarkdownRemark___frontmatter___index}) {
            edges {
              node {
                childMarkdownRemark {
                  html
                  frontmatter {
                    first_name
                    last_name
                    occupation
                    index
                    image {
                      id
                      childImageSharp {
                        sizes(maxHeight: 1000, maxWidth: 1000, fit: COVER) {
                          ...GatsbyImageSharpSizes
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
    return Barbers.allFile.edges
}
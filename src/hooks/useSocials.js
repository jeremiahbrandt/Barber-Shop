import {useStaticQuery, graphql} from 'gatsby'

export const useSocials = () => {
    const Socials = useStaticQuery(
        graphql`
        query SocialsQuery {
          allFile(filter: {sourceInstanceName: {eq: "socials"}, ext: {eq: ".md"}}, sort: {fields: childMarkdownRemark___frontmatter___index}) {
            edges {
                node {
                  childMarkdownRemark {
                    frontmatter {
                      link
                      index
                      image {
                        childImageSharp {
                          fixed(width: 25, height: 25) {
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
    return Socials.allFile.edges
}
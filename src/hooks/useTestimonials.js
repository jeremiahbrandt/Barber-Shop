import {useStaticQuery, graphql} from 'gatsby'

export const useTestimonials = () => {
    const Testimonials = useStaticQuery(
        graphql`
        query TestimonialsQuery {
            allFile(filter: {sourceInstanceName: {eq: "testimonials"}}) {
              edges {
                node {
                  childMarkdownRemark {
                    id
                    frontmatter {
                      author
                      date
                      rating
                      title
                    }
                    html
                  }
                }
              }
            }
          }          
        `
    )
    return Testimonials.allFile.edges
}

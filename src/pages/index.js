import React from "react"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Slideshow from "../components/Slideshow"
import Map from "../components/Map"
import { graphql } from "gatsby"
import {useTestimonials} from '../hooks/useTestimonials'
import {useStars} from '../hooks/useStars'
import '../style/style.sass'
import '../style/Testimonials.sass'

const Stars = (rating) => {
  const stars = useStars()
  const emptyStar = stars[0].node.childMarkdownRemark.frontmatter.image.childImageSharp.fixed
  const halfStar = stars[1].node.childMarkdownRemark.frontmatter.image.childImageSharp.fixed
  const fullStar = stars[2].node.childMarkdownRemark.frontmatter.image.childImageSharp.fixed

  return (
    <div className='rating'>
      <Img fixed={fullStar} />
      <Img fixed={fullStar} />
      <Img fixed={fullStar} />
      <Img fixed={fullStar} />
      <Img fixed={fullStar} />
    </div>
  )
}

const Testimonial = (testimonial) => {
  const {author, date, rating, title } = testimonial.md.frontmatter
  const { html } = testimonial.md

    return (
        <div className='testimonial'>
            <div className='author'>- {author}</div>
            <div className='date'>{date}</div>
            <Stars rating={rating} />
            <div className='testimonial-title'>{title}</div>
            <div className='html' dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    )
}

const TestimonialContainer = (testimonials) => {
  const testimonialData = useTestimonials()
    return (
        <div className='testimonials'>
            <div className='testimonials-title'>Testimonials</div>
            <div className='testimonials-wrapper'>{testimonialData.map((currTestimonial, index) => <Testimonial key={index} md={currTestimonial.node.childMarkdownRemark} />)}</div>
        </div>
    )
}


const IndexPage = ({data}) => (
    <Layout className='layout'>
        <Slideshow images={data.allFile.edges} />
        <TestimonialContainer />
        <Map />
    </Layout>
)

export const query = graphql`
query slideshowImages {
    allFile(filter: {sourceInstanceName: {eq: "slideshow"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxHeight: 500, maxWidth: 1024, fit: COVER) {
                ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
export default IndexPage

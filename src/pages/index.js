import React from "react"
import Layout from "../components/Layout"
import Slideshow from "../components/Slideshow"
import Map from "../components/Map"
import { graphql } from "gatsby"
import {useTestimonials} from '../hooks/useTestimonials'
import '../style/style.sass'
import '../style/testimonials.sass'
import '../style/stars.sass'

const Stars = (props) => {
  console.log('rating: ' + props.rating)

  const Star = (rating, index) => {
    const emptyStar = (
      <svg xmlns="http://www.w3.org/2000/svg" className='star' strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" className='empty' />
      </svg>
    )
    
    const halfStar = (
      <svg xmlns="http://www.w3.org/2000/svg" className='star' strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" className='full' />
      </svg>
    )

    const fullStar = (
      <svg xmlns="http://www.w3.org/2000/svg" className='star' strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" className='full' />
      </svg>
      
    )
      return fullStar
    // if(rating-index >= 0){return fullStar}
    // else if((rating-index) === -0.5){return halfStar}
    // else{return emptyStar}
  }

  return (
    <div className='rating'>
      <Star type={props.rating, 1} />
      <Star type={props.rating, 2} />
      <Star type={props.rating, 3} />
      <Star type={props.rating, 4} />
      <Star type={props.rating, 5} />
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
        {/* <Map /> */}
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

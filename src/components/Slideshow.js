import React, { useState, useEffect, useRef } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Slide = (props) => {
    return <Img sizes={props.sizes} className='slide' />
}

const Arrow = (props) => {
    return <Img fixed={props.fixed} className={`slideshow-arrow slideshow-arrow-${props.direction}`} />
}

const Slideshow = ({images}) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const indexRef = useRef(0)

    const handleTransition = () => {
      if(indexRef.current <= images.length-2) {indexRef.current = indexRef.current + 1}
      else {indexRef.current = 0}
      setSlideIndex(indexRef.current)
    }    
    
    useEffect(() => {
      setInterval(handleTransition, 4000)
    },[])

    const arrows = useStaticQuery(graphql`
    query arrows {
        allFile(filter: {sourceInstanceName: {eq: "arrows"}}) {
          edges {
            node {
              childImageSharp {
                fixed(width: 30, height: 30) {
                    ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      
    `)
    return (
        <div className='slideshow'>
            <div className={`slideshow-wrapper slideshow-wrapper-${slideIndex}`}>
            {/* <Slide sizes={images[slideIndex-1].node.childImageSharp.sizes} />
            <Slide sizes={images[slideIndex].node.childImageSharp.sizes} />
            <Slide sizes={images[slideIndex+1].node.childImageSharp.sizes} /> */}
              {images.map((currentImage, index) =><Slide key={index} index={index} sizes={currentImage.node.childImageSharp.sizes} />)}
            </div>
        </div>
    )
}

export default Slideshow
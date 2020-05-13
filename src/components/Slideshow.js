import React, { useState, useEffect, useRef } from "react"
import Img from "gatsby-image"

const Slide = props => {
  return <Img sizes={props.sizes} className="slide" />
}

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const indexRef = useRef(0)

  const handleTransition = () => {
    if (indexRef.current <= images.length - 2) {
      indexRef.current = indexRef.current + 1
    } else {
      indexRef.current = 0
    }
    setSlideIndex(indexRef.current)
  }

  useEffect(() => {
    setInterval(handleTransition, 4000)
  }, [])

  return (
    <div className="slideshow">
      <div className={`slideshow-wrapper slideshow-wrapper-${slideIndex}`}>
        {images.map((currentImage, index) => (
          <Slide
            key={index}
            index={index}
            sizes={currentImage.node.childImageSharp.sizes}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow

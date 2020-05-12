import React from "react"
import Layout from "../components/Layout"
import Img from 'gatsby-image'
import { useBarbers } from '../hooks/useBarbers'
import '../style/barbers.sass'

const BarbersPage = () => {
    const barbers = useBarbers()
    return (
        <Layout>
            <div className='barbers-wrapper'>
                {barbers.map((currBarber, index) => {
                    return (
                        <div className='individual-barber-wrapper' key={index}>
                            <div className='barber'>
                                <div className='info'>
                                    <div className='bio-title'>{`${currBarber.node.childMarkdownRemark.frontmatter.first_name} ${currBarber.node.childMarkdownRemark.frontmatter.last_name}`}</div>
                                    <div className='bio'>{currBarber.node.childMarkdownRemark.frontmatter.occupation}</div>
                                    {/* <div className='bio' dangerouslySetInnerHTML={{__html: currBarber.node.childMarkdownRemark.html}}></div> */}
                                </div>
                                <Img className='barber-image' sizes={currBarber.node.childMarkdownRemark.frontmatter.image.childImageSharp.sizes} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default BarbersPage

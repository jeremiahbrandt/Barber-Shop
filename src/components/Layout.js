import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import '../style/footer.sass'
import '../style/navigation.sass'
import { useSocials } from '../hooks/useSocials'

const Title = () => {
    return (
        <div className='site-title'>
            Joe's Barber Shop
        </div>
    )
}

const Navigation = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className='navigation'>
            <Title />
            <Hamburger handleClick={handleClick} />
            <div className={`navigation-link-container ${active ? 'navigation-link-container-active': ''}`} role='navigation'>
                <Link to ='/barber-shop/' className='navigation-link'>Home</Link>
                <Link to ='/barber-shop/appointment' className='navigation-link'>Schedule an Appointment</Link>
                <Link to ='/barber-shop/barbers' className='navigation-link'>Meet the Barbers</Link>
            </div>
        </div>
    )
}

const Hamburger = (props) => {
    return (
        <div className='hamburger' onClick={props.handleClick} role='button'>
            <div className='hamburger-line' />
            <div className='hamburger-line' />
            <div className='hamburger-line' />
        </div>
    )
}

const SocialLink = (props) => {
    return (
        <a href={`https://${props.link}`} target='__blank' className='social-link'>
            <Img fixed={props.fixed} />
        </a>
    )
}

const ContactForm = () => {

    return (
        <form className='contact-form'>
            <div className='title'>Send Us a Message</div>
            <div className='fields'>
                <label className='section first-name'>
                    <div className='description'>First Name</div>
                    <input className='input' type='text' name='fName' />
                </label>
                <label className='section last-name'>
                    <div className='description'>Last Name</div>
                    <input className='input' type='text' name='lName' />
                </label>
                <label className='section phone'>
                    <div className='description'>Phone Number</div>
                    <input className='input' type='tel' name='phone' />
                </label>
                <label className='section email'>
                    <div className='description'>Email Address</div>
                    <input className='input' type='email' name='email' />
                </label>
                <textarea className='message' />
                <input className='input submit' type='submit' value='Send' />
            </div>
        </form>
    )
}

const Footer = () => {
    const year = new Date().getFullYear()
    const socials = useSocials()
    return (
        <div className='footer'>
            <ContactForm />
            <div className='socials'>
                {socials.map((currSocial, index) => <SocialLink key={index} link={currSocial.node.childMarkdownRemark.frontmatter.link} fixed={currSocial.node.childMarkdownRemark.frontmatter.image.childImageSharp.fixed} />)}
            </div>
            <div className='copyright'>
                Copyright {'\u00A9'} {year} Joe's Barber Shop
            </div>
        </div>
    )
}

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className='header'>
                <Navigation />
            </div>
            <div className='main-content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

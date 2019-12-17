import React from 'react'
import Img from "gatsby-image"

const Header = ({imageData}) => (
    <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        padding: '10px 0', 
        backgroundColor: 'rgba(0, 0, 0, 0.40)'
    }}>
    <a href="https://itunes.apple.com/gb/artist/saltwater-sun/985399697" target="_blank">
        <Img fixed={imageData.apple.childImageSharp.fixed} />
    </a>
    <a href="https://www.facebook.com/saltwtrsun/" target="_blank">
        <Img fixed={imageData.facebook.childImageSharp.fixed} />
    </a>
    <a href="https://www.instagram.com/saltwater_sun" target="_blank">
        <Img fixed={imageData.instagram.childImageSharp.fixed} />
    </a>
    <a href="https://soundcloud.com/saltwater-sun" target="_blank">
        <Img fixed={imageData.soundcloud.childImageSharp.fixed} />
    </a>
    <a href="https://open.spotify.com/artist/4N8Ccd33SHnh2cNlojKYBv?si=i4U3MdnHSI6bZPKHbO7KIw" target="_blank">
        <Img fixed={imageData.spotify.childImageSharp.fixed} />
    </a>
    <a href="https://twitter.com/saltwater_sun" target="_blank">
        <Img fixed={imageData.twitter.childImageSharp.fixed} />
    </a>
    <a href="https://saltwatersun.bigcartel.com/" target="_blank">
        <Img fixed={imageData.shop.childImageSharp.fixed} />
    </a>
    </div>
)
export default Header
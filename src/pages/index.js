import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      twitter: file(relativePath: { eq: "twitter.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        facebook: file(relativePath: { eq: "facebook.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        apple: file(relativePath: { eq: "apple.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        shop: file(relativePath: { eq: "shop.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        soundcloud: file(relativePath: { eq: "soundcloud.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        spotify: file(relativePath: { eq: "spotify.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        instagram: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        } 
      }
  `)
  return(
  <Layout>
    <SEO title="Home" />
    <Header imageData={data} />
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Img 
        fluid={data.logo.childImageSharp.fluid} 
        draggable={false}
        className="logo"
        style={{
          position: 'absolute',
          width: '100%',
          maxWidth: 700,
        }}
      />
    </div>
    <iframe style={{position: 'fixed', bottom: 0}} src="https://open.spotify.com/embed/album/16p0tYXMrrXSDd2vUSSwT2" id="spotifyWidget" width="100%"
        height="90px" frameBorder="0" allowtransparency="false" allow="encrypted-media"></iframe>
  </Layout>
)}

export default IndexPage

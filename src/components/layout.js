/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import "./layout.css";



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        } 
      }
    `}
render={imgs => {
  const imageData = imgs.desktop.childImageSharp.fluid
  return(
  <>
    <main className="backgroundImage" style={{minHeight: '100vh'}}>{children}</main>
  </>
  )
  
}}
/>    
)







export default Layout;

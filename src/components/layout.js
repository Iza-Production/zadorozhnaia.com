/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
// import "./layout.css"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>{children}</div>
      <Footer />
        <Helmet>
          <script src={withPrefix('../../scripts/jquery.js')} type="text/javascript" />
        </Helmet>
    </>
  )
}

export default Layout

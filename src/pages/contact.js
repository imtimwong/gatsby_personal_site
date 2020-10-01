import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaEnvelope } from 'react-icons/fa';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Wanna get in touch?</h1>

    <p>Feel free to drop me an email at :<a style = {{fontSize: "1.2em", position: "relative", top: "5px", left: "5px", color:"#4b6ed0"}} href="mailto:bytimwong@gmail.com" 
    target="_blank" rel="noopener noreferrer"><FaEnvelope /></a></p>

    index.js 
  </Layout>
)

export default ContactPage

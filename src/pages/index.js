import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//import Footer from "../components/footer"

import { FaEnvelope } from 'react-icons/fa';

const IndexPage = () => (
  <Layout>
    <SEO title="Tim Wong | Incoming Data Engineer" />
    <div>
      <h1>Hey, I'm Tim</h1>
      
    </div>
    <div className = "home-all">
      <div className = "home-content">
        <h3>ETL developer | Data Engineer</h3>

        <p>I've been working in the Data Warehousing field for 6.5 years. </p>
        <p>Currently looking for opportunities in Data Engineering. <br />
        Drop me a message!
        <a style = {{fontSize: "1.2em", position: "relative", top: "5px", left: "5px", color:"#4b6ed0"}} href="mailto:tim@bytimwong.com" 
        target="_blank" rel="noopener noreferrer"><FaEnvelope /></a></p>

        
        
        <p>Recently, I've been working on data science pet projects and learning new front end development technologies.</p>

        <p>When I'm not coding you can find me planning backpacking/motorcycling 
        trips, sipping a cup of tea, people watching or watching a comedy show.
         
    </p>

        <p>My mantra: Make progress or make excuses</p>
      </div>
      <div className = "home-image"  style={{ minWidth: `350px`}}> 
      {/*style={{ maxWidth: `400px`}}*/}
      
        <Image />
      </div>

    </div>

  </Layout>
)

export default IndexPage

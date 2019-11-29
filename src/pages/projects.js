import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"




const ProjectPage = () => {

  const data =  useStaticQuery (graphql`
query Images{
  image: file(relativePath: {eq: "architecture_diagram.png"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
} 
`)


  return (

  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <h3>Pet projects I've worked on</h3>
    
    <div>
      <h4><a style={{ color: "inherit"}} href="https://github.com/imtimwong/twittersentiment" target="_blank" rel="noopener noreferrer">Twitter sentiment analysis</a></h4>
      
      <p>The objective is to pick up new languages, learn to work with semi-structured data and 
      Data Science technologies/stack. To stream live tweets with twitter API for sentiment analysis.</p>

      <p>This project is an analysis of the sentiments on the yearly air pollution affecting mainly Malaysia, 
      Singapore and Indonesia. 
      Based on the results of the analysis, we can obtain the public's opinion about the haze and how it's affecting them.</p>
      
      <p>Tech used: Python, Postgresql, Docker Container, SQLWorkbenchJ, Pycharm, Jupyter Notebook, Spark, Hadoop</p>
      {/*<Img
        fluid={data.image.childImageSharp.fluid}
        alt="twitter sentiment analysis diagram"
      />*/}
      <p><a style={{ color: "inherit"}}href="https://github.com/imtimwong/twittersentiment" target="_blank" rel="noopener noreferrer">More on GitHub</a></p>
      
      
      
      
      </div>

      <div> <br />
      </div>
      <div>
      <h4><a style={{ color: "inherit"}} href="https://github.com/imtimwong/gatsby_personal_site" target="_blank" rel="noopener noreferrer">This personal site</a></h4>
      
      <p>Built this personal site to learn React, Java Script, Gatsby and GraphQL. And just for the fun of it.</p>

      <p>Tech used: React, Java Script, CSS, SCSS, Gatsby, GraphQL, Netlify</p>
      
      <p><a style={{ color: "inherit"}}href="https://github.com/imtimwong/gatsby_personal_site" target="_blank" rel="noopener noreferrer">More on GitHub</a></p>
      
      {/*<Img
        fluid={data.image.childImageSharp.fluid}
        alt="twitter sentiment analysis diagram"
      />*/}
      
      
      </div>
  </Layout>

  
)
}

export default ProjectPage



import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Footer from "../components/footer"

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>What am I up to now?</h1>
    <h2>October 12th, 2019</h2>
    <div>
    
    <ul //need to add styling 
    style={{ margin: 0, listStyle: 'none'}}>
      <li><b>Goals: </b>Currently looking for opportunities in Data Engineering</li>
      <li><b>Current Projects: </b>This site :) and Twitter sentiment analysis</li>
      <li><b>Current challenges: </b>#100DaysOfCode, #30DaysOfDiscipline</li>
      <li><b>Learning about: </b>React, Gatsby, GraphQL, Spark, Hadoop, Python</li>
      <li><b>My curious mind: </b>Thinking about a ML project to start off with</li>
      <li><b>Movies: </b>Can't wait for Zombie Land 2 to be out</li>
      <li><b>Series: </b>Silicon Valley season 6</li>
      <li><b>Listening to: </b>Taylor Swift's Lover album, Some Swedish pop songs, Dancing in the Moonlight by Toploader</li>
      <li><b>Recent jokes: </b>JSON Derullllloooo!</li>
    </ul>
    
    </div>

    

    <a //need to add styling for this 
    style = {{fontSize: "0.8em"}}
    href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">What's a "Now" page?</a>
  </Layout>
)

export default NowPage

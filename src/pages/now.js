import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Footer from "../components/footer"

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>What am I up to now?</h1>
    <h2>October 1st, 2020</h2>
    <div>
    
    <ul //need to add styling 
    style={{ margin: 0, listStyle: 'none'}}>
      <li><b>Goals: </b>Currently looking for opportunities in Data Engineering</li>
      <li><b>Current Projects: </b>This site :) and Twitter sentiment analysis</li>
      <li><b>Current challenges: </b>#100DaysOfCode, #30DaysOfDiscipline</li>
      <li><b>Learning about: </b>React, Gatsby, GraphQL, Spark, Hadoop, Python</li>
      <li><b>My curious mind: </b>Why are you at my site? haha ... jokes.</li>
      <li><b>Movies: </b>Is Tenet good?</li>
      <li><b>Series: </b>Not binging at the moment</li>
      <li><b>Listening to: </b>17 år by Veronica Maggio, Drops of Jupyter by Taylor Swift, Tik Tok by Kesha(yes, it's a song)</li>
      <li><b>Recent jokes: </b>JSON Derullllooo!</li>
      <li><b>Events: </b>It's <a href="https://hacktoberfest.digitalocean.com/" >Hacktoberfest 2020!!!</a> check it out</li>
    </ul>
    
    </div>

    

    <a //need to add styling for this 
    style = {{fontSize: "0.8em"}}
    href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">What's a "Now" page?</a>
  </Layout>
)

export default NowPage

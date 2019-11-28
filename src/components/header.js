import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'

const Header = ({ siteTitle }) => (
  <header
    style={{
      //background: 'linear-gradient(to right, #845ec2, #806ecc, #7e7cd4, #7d8adb, #7f97e1, #76a5eb, #6eb2f2, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
      //background: 'linear-gradient(to right, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
      //background: 'linear-gradient(to right, #845ec2, #6c6ccd, #5279d3, #3384d6, #008dd5)',
      background: 'linear-gradient(to right, #845ec2, #7862c7, #6b66ca, #5c6ace, #4b6ed0, #3874d0, #2279cf, #007ecc, #0085c4, #0089b8, #008ca9, #008e9b)',
      marginBottom: `1.45rem`,
      

      //background: 'linear-gradient(to right, #d65db1, #ff5f81, #ff8544, #f5ba00, #a8eb12)',
      //background: 'linear-gradient(to right, #d65db1, #b966c5, #9470d3, #6478da, #007ed9)',


      //background: '#8A2387', // eslint-disable-next-line
          //background:
//'-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)', // eslint-disable-next-line
          //background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)',
          padding: '0.1em 10px',
          
          boxShadow: '0 10px 15px rgba(50, 50, 93, 0.2)'
    }}
  >
    
      <div
          className="header-links"
          style={{
            maxWidth: '960px',//from gatsby starter default
            //textAlign: 'right',//actually not needed
            margin: '0 auto',
            //padding: `0.1rem 1.0875rem`,//from 1.45rem
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',//first item at the srtat and last item at the end
            alignItems: 'center',
          }}
        >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      
        <div //className="menu-links"//seems like not useful
        >
          <Link to="/now">Now</Link>
          <Link to="/projects">Projects</Link>
          {/*<Link to="/buy-tim-coffee">Coffee</Link>
          <Link to="/contact">So, call me maybe?</Link>
        <Link to="/writing">Writing</Link>*/}
          </div>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

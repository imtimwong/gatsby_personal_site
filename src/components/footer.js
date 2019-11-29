import React from "react"
//import { Link } from "gatsby"
//import { FaTwitter,FaDev, FaGithub, FaCoffee, FaEnvelope } from 'react-icons/fa';
import { FaTwitter,FaDev, FaGithub, FaEnvelope } from 'react-icons/fa';

import { FiGithub,FiTwitter,FiMail } from "react-icons/fi"
import './footer.scss'

const Footer = () => {
    return(

        <footer className = "footer-fixed"
        style={{
            background: 'linear-gradient(to right, #845ec2, #7862c7, #6b66ca, #5c6ace, #4b6ed0, #3874d0, #2279cf, #007ecc, #0085c4, #0089b8, #008ca9, #008e9b)',
            ///this one background: 'white',
            //marginTop: `1.45rem`,
            //alignItems: 'center',
            padding: '0.3em 10px',//'0.1em 10px' need to check this but should be fine
            boxShadow: '0 -10px 15px rgba(50, 50, 93, 0.2)'
        }}>

        <div style={{
            maxWidth: '960px',//from gatsby starter default
            //textAlign: 'right',//actually not needed
            margin: '0 auto',
            //padding: `0.1rem 1.0875rem`,//from 1.45rem
            display: 'flex',
            //flexDirection: 'row',
            justifyContent: 'space-between',//first item at the srtat and last item at the end
            flexWrap: 'wrap',
            
            
            //alignItems: 'center',
            //justifyContent: 'center',
        }}>
        
            {/*<div className = "footer-text" style={{ margin: 0,display: 'flex',alignItems: 'center',}}>
            <p>Created by Tim Wong © {new Date().getFullYear()}, All Rights Reserved, Built with 
            {' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a></p>

    </div>*/}
{/*style={{ margin: 0,display: 'flex',alignItems: 'center',}*/}
            <div style={{ margin: 0,display: 'flex'}}>
            <p className = "footer-text" style={{ margin: 0}}>
                Created by Tim Wong © {new Date().getFullYear()}, All Rights Reserved.
                </p>
                </div>
{/*FaLinkedinIn,FaDev, FaGithub, FaCoffee, FaEnvelope*/}
{/*style={{ margin: '0 auto' ,display: 'flex',alignItems: 'center',}}*/}
            <div className = "footer-div" style={{ margin: 0, display: 'flex', alignItems:'center'}}  >
                
                <ul className = "footer-links" style = {{margin: '0 auto', display:'flex'}}>
                    <li><a href="https://twitter.com/ByTimWong" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                    
                    <li><a href="https://dev.to/timwong" target="_blank" rel="noopener noreferrer"><FaDev /></a></li>
                    <li><a href="https://github.com/imtimwong" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                    {/*<li><Link to="/buy-tim-coffee"><FaCoffee /></Link></li>*/}
                    <li><a href="mailto:tim@bytimwong.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a></li>
                </ul>
            
                </div>
            </div>
        </footer>
    )
    }

export default Footer
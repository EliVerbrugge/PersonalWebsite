import { Link } from "gatsby";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../styles/Link.css"

const Links = () => (
    <div className='rows'>
     <a href="https://www.github.com/" className='row'>< FaGithub size={64} /></a>
     <a href="https://twitter.com/SwagBelgian" className='row'>< FaTwitter size={64} /></a>
     <a href="https://www.linkedin.com/in/eli-verbrugge-a90716193/" className='row'>< FaLinkedin size={64} /></a>
    </div>
);
export default Links;
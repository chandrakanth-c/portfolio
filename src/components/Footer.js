import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './Footer.css';


class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <FontAwesomeIcon icon={faCopyright}/> 2021 All rights reserved
            </div>
        )
    }
}


export default Footer;
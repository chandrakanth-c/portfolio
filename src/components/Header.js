import React from 'react';
import './Header.css';
import MobNav from './MobNav';  
import resume from '../assets/Chandrakanth_Chittappa_Resume.docx';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <MobNav/>
                <a className="heading">Chandrakanth Chittappa</a>
                <div className="header-right">
                    <a href="#home">home</a> 
                    <a href="#about">about</a>
                    <a href="#projects">projects</a>
                    <a href={resume} download>resume</a>
                </div>
            </div>
        )
    }
}


export default Header;
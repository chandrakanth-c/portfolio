import React from 'react';
import './Header.css';
import MobNav from './MobNav';  

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
                    <a href="#projects">skills</a>
                    <a href="#projects">links</a>
                    <a href="#projects">resume</a>
                </div>
            </div>
        )
    }
}

export default Header;
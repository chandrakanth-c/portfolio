import React from 'react';
import './MobNav.css';

class MobNav extends React.Component{

    constructor(props){
        super(props);
    }

    dropNav = () => {
        const divElement = document.getElementsByClassName("header-right")[0];
        var height=divElement.style.height;
        if(height==='0rem' || !height){
            divElement.style.height='20.4rem';
        }else{
            divElement.style.height='0rem';
        }
    }

    render(){
        return(
            <div className="mobNav">
                <a onClick={this.dropNav} className="nav">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </a>
            </div>
        )
    }
}

export default MobNav;
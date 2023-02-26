import React from "react";
import search from './images/search-icon.webp'
import './App.scss';

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.weatherMethod} className="Header">       
            <img className='Search-img' src={search} alt="Search" /> 
            <input type="text" name='searchcity' placeholder='Search' className='Search-text'>
            </input>
        </form>
        );
    }
}

export default Form;
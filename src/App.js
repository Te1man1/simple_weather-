import Form from './form';
import cloudy from './images/35.svg';
import React, { useState, setState } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.searchcity.value; 
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=daily&appid=279feed19b448f72ecef1af05aa0bcdc&units=metric`);
    const weatherdata = await api_url.json();
    console.log(weatherdata);

    this.setState({
      temp: weatherdata.main.temp,
      feelslike: weatherdata.main.feels_like,
      windspeed: weatherdata.wind.speed,
      pressure: weatherdata.main.pressure,
      lon: weatherdata.coord.lon,
      lat: weatherdata.coord.lat,
      city: weatherdata.name,
      error: " "
    });
  }

  render(){
    return (

    <div className='Main'>
      <Form weatherMethod = {this.getWeather}/>
      <div className="InfoWidgets">
       <div className="Info">
           <div className="Days">
           <div className='Today'>
             <div className='TodayCity'>{this.state.city}</div>
             <div className='TodayLine'></div>
             <img className='Todayimg' src={cloudy} /> 
             <div className='TodayTemp'>{this.state.temp}°C</div>
             <div className='TodayFeelslike'>Real feel {this.state.feelslike}°</div>
             <div className='TodayWind'>Wind {this.state.windspeed}m/s </div>
             <div className='TodayPressure'>Pressuree {this.state.pressure}hPa</div>
             
           </div>
            <div className='Day2'>
              <p></p>
            </div>
            <div className='Day3'>
              <p></p>
            </div>
            <div className='Day4'>
              <p></p>
            </div>
            <div className='Day5'>
              <p></p>
            </div>
          </div>
          <div className="Map"> 
           <div className='ymaps-layers-pane' id='Yandex-map'></div>
          </div>
        </div>
        <div className="Widgets">
          <div className="Wind-status">
            <p></p>
          </div>
          <div className="Sun-position">
            <p></p>
          </div>
          <div className="UV-index">
            <p></p>
          </div>
         </div>
      </div>
    </div>
    );  
  }
}

export default App;

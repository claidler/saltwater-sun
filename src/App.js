import React, {useEffect, useState} from 'react';
import logo from './logo.png';
import apple from './apple.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import shop from './shop.png';
import soundcloud from './soundcloud.png';
import spotify from './spotify.png';
import twitter from './twitter.png';
import ky from 'ky';
import './App.css';

function App() {
  const [dates, setDates] = useState();
  useEffect(async() => {
    setDates(await ky.get('https://saltwater-sun.com/schedule.json').json());
  },[])
  return (
    <div className="App">
      <div className="icon-container">
        <a href="https://itunes.apple.com/gb/artist/saltwater-sun/985399697" target="_blank"><img className="icon" src={apple} /></a>
        <a href="https://www.facebook.com/saltwtrsun/" target="_blank"><img className="icon" src={facebook} /></a>
        <a href="https://www.instagram.com/saltwater_sun" target="_blank"><img className="icon" src={instagram} /></a>
        <a href="https://soundcloud.com/saltwater-sun" target="_blank"><img className="icon" src={soundcloud} /></a>
        <a href="https://twitter.com/saltwater_sun" target="_blank"><img className="icon" src={spotify} /></a>
        <a href="https://open.spotify.com/artist/4N8Ccd33SHnh2cNlojKYBv?si=i4U3MdnHSI6bZPKHbO7KIw" target="_blank"><img className="icon" src={twitter} /></a>
        <a href="https://saltwatersun.bigcartel.com/" target="_blank"><img className="icon" src={shop} /></a>
      </div>
        <img src={logo} className="logo" alt="logo" />
        <iframe className="spotify" src="https://open.spotify.com/embed/album/2J6jqoCHru9GNwFxSGDdbu" id="spotifyWidget" width="100%"
        height="90px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <div className="dates-container">
        {dates &&
          dates.map(date => (
            <a href={date.url}><p style={{color: 'white'}}>{date.title}: {date.date}</p></a>
          ))}
        </div>
    </div>
  );
}

export default App;

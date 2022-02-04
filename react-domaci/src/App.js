import "./App.css";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import NetflixImg from "./Images/Netflix.png";
import SpotifyImg from "./Images/Spotify.png";
import DeezerImg from "./Images/Deezer.png";
import YouTubeImg from "./Images/Youtube.png";
import Disney from "./Images/Disney+.png";
import AppleMusic from "./Images/Apple_Music.png";
import AmazonMusic from "./Images/AmazonMusic.png";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Subscription from "./Components/MySubscriptions";

function App() {
  const [money, setMoney] = useState(50);
  const [mySubsctiptions, setMySubscriptions] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Netflix",
      description:
        "Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a library of films "
        + " and television series through distribution deals as well as its own productions, known as Netflix Originals."
        + "As of December 31, 2021, Netflix had over 221.8 million subscribers worldwide, including 74.0 million in Europe.",
      picture: NetflixImg,
        price: 20,
        vecDodat: 0,
    },
    {
      id: 2,
      title: "Spotify",
      description:
        "Spotify is a Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon. It is the world's "
        + "largest music streaming service provider, with over 381 million monthly active users, including 172 million paying subscribers"
        + "Spotify offers digital copyright restricted recorded music and podcasts, including more than 70 million songs.",
        picture: SpotifyImg,
        price: 12,
        vecDodat: 0,
    },
    {
      id: 3,
      title: "Deezer",
      description:
        "Deezer (stylized as deezer) is a French online music streaming service. It allows users to listen to music content from record labels "
        + "as well as podcasts on various devices online or offline"
        +"Created in Paris, Deezer currently has 73 million licensed tracks in its library, with over 30,000 radio channels, 100 million playlists, 16 million monthly active users",
      picture: DeezerImg,
        price: 9,
        vecDodat: 0,
    },
    {
    id: 4,
      title: "YouTube Premium",
      description:
      "YouTube Premium (formerly YouTube Red) is a subscription service offered by the video platform YouTube. The service provides ad-free access to content across the service,"
      + " as well as access to premium YouTube Originals programming produced in collaboration with the site's creators, downloading videos and background playback of videos.", 
      picture: YouTubeImg,
      price: 4,
      vecDodat: 0,
    },
    {
      id: 5,
        title: "Disney +",
        description:
        "Disney+ is an American subscription video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of "
        +"The Walt Disney Company.The service primarily distributes films and television series produced by The Walt Disney Studios and Walt Disney Television,"
        +" and brands such as Disney, Marvel, Star Wars, National Geographic.",
        picture: Disney,
        price: 27,
        vecDodat: 0,
      },
      {
        id: 6,
          title: "Apple Music",
          description:
          "Apple Music is a music and video streaming service developed by Apple Inc. Users select music to stream to their device on-demand, or they can listen to existing playlists."
          +" The service also includes the Internet radio stations Apple Music 1, Apple Music Hits, and Apple Music Country, which broadcast live to over 200 countries 24 hours a day."
          +" The service launched in 2015.",
          picture: AppleMusic,
          price: 14,
          vecDodat: 0,
        },
        {
          id: 7,
            title: "Amazon Music",
            description:
            "Amazon Music (previously Amazon MP3) is a music streaming platform and online music store operated by Amazon. Launched in public beta on September 25, 2007, in "
            +"January 2008 it became the first music store to sell music without digital rights management (DRM) from the four major music labels "
            +"(EMI, Universal, Warner, and Sony BMG), as well as many independents. ",
            picture: AmazonMusic,
            price: 19,
            vecDodat: 0,
          },
    
  ]);
  function refreshFavorites() {
    let newProducts = products.filter((s) => s.vecDodat > 0);
    setMySubscriptions(newProducts); 
    console.log(mySubsctiptions);
  }
  function addProduct(title, price, id) {

    if(money >= price){
      products.forEach((p) => {
        if(p.id === id && p.vecDodat ===0) {
          p.vecDodat = 1;
          setMoney(money - price);  
          refreshFavorites();
        }

    });
    }
     else{
      alert("Nemate dovoljno novca za pretplatu. Imate "+ money + " evra u novcaniku, a potrebno Vam je "+ price);
      console.log("Nije dodat je proizvod: " + title);
     } 
     console.log("Ostalo Vam je: " + money);
  }
  return (
    <BrowserRouter className="App">
      <NavBar money={money}></NavBar>
      <Routes>
        <Route 
          path = "/"
          element={<Products products={products} onAdd={addProduct} />}
      />
      <Route path="/cart" element={<Subscription products={mySubsctiptions} />} />
    </Routes>
    </BrowserRouter>
  );
 
}

export default App;

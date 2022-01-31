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

function App() {
  const [money, setMoney] = useState(30);
  const products = [
    {
      id: 1,
      title: "Netflix",
      description:
        "Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a library of films "
        + " and television series through distribution deals as well as its own productions, known as Netflix Originals."
        + "As of December 31, 2021, Netflix had over 221.8 million subscribers worldwide, including 75.2 million in the United States and Canada"
        + "74.0 million in Europe, the Middle East and Africa, 39.9 million in Latin America and 32.7 million in Asia-Pacific",
      picture: NetflixImg,
        price: 20,

    },
    {
      id: 2,
      title: "Spotify",
      description:
        "Spotify is a Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon. It is the world's "
        + "largest music streaming service provider, with over 381 million monthly active users, including 172 million paying subscribers"
        + "Spotify offers digital copyright restricted recorded music and podcasts, including more than 70 million songs. Users can search for music based on artist,"
         +"album, or genre, and can create, edit, and share playlists.",
        picture: SpotifyImg,
        price: 12,
    },
    {
      id: 3,
      title: "Deezer",
      description:
        "Deezer (stylized as deezer) is a French online music streaming service. It allows users to listen to music content from record labels, including Universal Music Group" 
        + "Sony Music and Warner Music Group (owned by Deezer's parent company Access Industries) as well as podcasts on various devices online or offline"
        +"Created in Paris, Deezer currently has 73 million licensed tracks in its library, with over 30,000 radio channels, 100 million playlists, 16 million monthly active users",
      picture: DeezerImg,
        price: 9,
    },
    {
    id: 4,
      title: "YouTube Premium",
      description:
      "YouTube Premium (formerly YouTube Red) is a subscription service offered by the video platform YouTube. The service provides ad-free access to content across the service,"
      + " as well as access to premium YouTube Originals programming produced in collaboration with the site's creators, downloading videos and background playback of videos"
      + " on mobile devices, and access to the YouTube Music music streaming service",
      picture: YouTubeImg,
      price: 4,
    },
    {
      id: 5,
        title: "Disney +",
        description:
        "Disney+ is an American subscription video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of "
        +"The Walt Disney Company.[1] The service primarily distributes films and television series produced by The Walt Disney Studios and Walt Disney Television,"
        +" with dedicated content hubs for brands such as Disney, Pixar, Marvel, Star Wars, National Geographic, and including Star in some countries."
        +" Original films and television series are also distributed on Disney+.",
        picture: Disney,
        price: 27,
      },
      {
        id: 6,
          title: "Apple Music",
          description:
          "Apple Music is a music and video streaming service developed by Apple Inc. Users select music to stream to their device on-demand, or they can listen to existing playlists."
          +" The service also includes the Internet radio stations Apple Music 1, Apple Music Hits, and Apple Music Country, which broadcast live to over 200 countries 24 hours a day."
          +" The service was announced on June 8, 2015, and launched on June 30, 2015. New subscribers get a three-month free trial or six month free trial with the purchase of "
          +"select products before the service requires a monthly subscription.",
          picture: AppleMusic,
          price: 14,
        },
        {
          id: 7,
            title: "Amazon Music",
            description:
            "Amazon Music (previously Amazon MP3) is a music streaming platform and online music store operated by Amazon. Launched in public beta on September 25, 2007, in "
            +"January 2008 it became the first music store to sell music without digital rights management (DRM) from the four major music labels "
            +"(EMI, Universal, Warner, and Sony BMG), as well as many independents. All tracks were originally sold in 256 kilobits-per-second variable bitrate"
            +" MP3 format without per-customer watermarking or DRM; however, some tracks are now watermarked. Licensing agreements with recording companies restrict the "
            +"countries in which the music can be sold.",
            picture: AmazonMusic,
            price: 19,
          },
    
  ];
  function addProduct(title, price) {
    console.log("Dodat je proizvod: " + title);
    setMoney(money - price);
    console.log("Ostalo ti je: " + money);
  }
  return (
    <div className="App">
      <NavBar money={money}></NavBar>
      <Products products={products} onAdd={addProduct} />
    </div>
  );
}

export default App;

import "./App.css";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import NetflixImg from "./Images/Netflix.png";
import SpotifyImg from "./Images/Spotify.png";
import DeezerImg from "./Images/Deezer.png";
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
        + "largest music streaming service provider, with over 381 million monthly active users, including 172 million paying subscribers, as of September 202"
        + "Spotify offers digital copyright restricted recorded music and podcasts, including more than 70 million songs. Users can search for music based on artist, album, or genre, and can create, edit, and share playlists.",
        picture: SpotifyImg,
        price: 12,
    },
    {
      id: 3,
      title: "Deezer",
      description:
        "Deezer (stylized as deezer) is a French online music streaming service. It allows users to listen to music content from record labels, including Universal Music Group" 
        + "Sony Music and Warner Music Group (owned by Deezer's parent company Access Industries) as well as podcasts on various devices online or offline"
        +"Created in Paris, Deezer currently has 73 million licensed tracks in its library, with over 30,000 radio channels, 100 million playlists, 16 million monthly active users"
        +" and 7 million paid subscribers as of January 2019.[4][5] The service is available for Web, Android, iOS, Windows Mobile, BlackBerry OS, Windows, and MacOS.",
      picture: DeezerImg,
        price: 9,
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

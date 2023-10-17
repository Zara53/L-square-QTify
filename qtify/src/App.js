import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumbsData = async () => {
    const data = await fetchTopAlbums();
    // console.log(data);
    setTopAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbumbsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {/* {topAlbumsData.map((item) => {
        return <Card data={item} type="album" key={item.title} />;
      })} */}
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
      </div>
    </div>
  );
}

export default App;

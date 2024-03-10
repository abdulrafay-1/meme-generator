import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [memes, setMemes] = useState();

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      console.log(data.data.memes);
      setMemes(data.data.memes);
    };
    fetchMemes();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", padding: "20px" }}>MEME GENERATOR</h1>
      <div className="meme-con">
        {memes &&
          memes.map((item) => {
            return (
              <Link to={`meme/${item.id}`}>
                <div key={item.id}>
                <img src={item.url} />
                <p>{item.name}</p>
              </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default App;

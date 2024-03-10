import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

const Meme = () => {
  const [meme, setMeme] = useState();

  let { id } = useParams();
  console.log(id);

  const postOptions = {
    method: "POST"
  }

  const topText = "Hello"
  const bottomText = "Bye"

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      console.log(data.data.memes);
      const filterMeme = data.data.memes.filter((item) => item.id === id);
      console.log(filterMeme);
      setMeme(filterMeme[0]);
    };
    fetchMemes();
  }, []);

    function generateMeme() {
        fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=rafay10&password=rafay413&text0=${topText}&text1=${bottomText}`,postOptions)
        .then(res => res.json())
        .then(data => console.log(data))
    }
  



  return (
    <div>
      {meme && (
        <div style={{textAlign: "center"}}>
          <img src={meme.url} />
          <h1>{meme.name}</h1>
          <input value={topText}/>
          <input value={bottomText}/>
          <button onClick={generateMeme}>Generate Meme</button>
        </div>
      )}
    </div>
  );
};

export default Meme;

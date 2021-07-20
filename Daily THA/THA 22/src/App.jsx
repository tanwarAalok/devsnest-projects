import { template } from "lodash";
import React, { useState , useEffect} from "react";
import './App.css';
import Template from "./components/Templates";
import Meme from "./components/Meme";



function App(props) {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
      setTemplates(data.data.memes);
    });
  }, []);
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {
        meme === null ? (<Template templates={templates} setMeme={setMeme} />) : (<Meme meme={meme} setMeme={setMeme}/>)
      }
    </div>
      
  );
};

export default App;
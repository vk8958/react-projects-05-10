

import axios from 'axios'
import { Box } from '@mui/material'
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import { useEffect, useState } from 'react'
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom';


function App() {
  const [videos, setVideos] = useState([]);
 



  const callAPI = async () => {

    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: 'music',
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'date'
      },
      headers: {
        'X-RapidAPI-Key': '7f4d4de38dmsh745c6516b2556edp14857ejsn11316b73c0ee',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }


    }

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    const { data } = await axios.get("https://youtube-v31.p.rapidapi.com/search?part=snippet&q-New&maxResults=50", options);

    setVideos(data.items)
    console.log(data)


  }
  useEffect(() => {
    callAPI();
  }, [])

  return (
    <div className="App">

      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar videos={videos} />
        <Home videos={videos} />
      </Box>

    </div>
  );
}

export default App;

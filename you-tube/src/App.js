
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () => (

  <div className="App">
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" ,color:"white" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/Search/:searchTerm" element={<SearchFeed />} />

        </Routes>
      </Box>
    </BrowserRouter>
  </div>
)


export default App;

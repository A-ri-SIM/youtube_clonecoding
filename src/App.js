import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import SearchHeader from './components/SearchHeader';
import { useState } from 'react';
import Menu from './components/Menu';

const queryClient = new QueryClient();

function App() {
  const width = window.screenX;
  const [isClick, setIsClick] = useState(false);
  const [watched, setWatched] = useState([]);
  const [addVideo, setAddVideo] = useState([]);
  return (
    <YoutubeApiProvider>
      <SearchHeader isClick={isClick} setIsClick={setIsClick} />
      <QueryClientProvider client={queryClient}>
        <div className="flex">
          <Menu isClick={isClick} setIsClick={setIsClick} />
          <Outlet context={{ watched, setWatched, addVideo, setAddVideo }} />
        </div>
      </QueryClientProvider>
    </YoutubeApiProvider>
  );
}

export default App;

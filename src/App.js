import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import SearchHeader from './components/SearchHeader';
import { useState } from 'react';
import Menu from './components/Menu';

const queryClient = new QueryClient();

function App() {
  const [isClick, setIsClick] = useState(true);
  return (
    <YoutubeApiProvider>
      <SearchHeader isClick={isClick} setIsClick={setIsClick} />
      <QueryClientProvider client={queryClient}>
        <div className="flex">
          <Menu isClick={isClick} setIsClick={setIsClick} />
          <Outlet />
        </div>
      </QueryClientProvider>
    </YoutubeApiProvider>
  );
}

export default App;

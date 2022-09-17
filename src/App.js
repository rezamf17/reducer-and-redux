import './App.css';
import Navigation from './containers/Navigation';
import { Box } from '@mui/system';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default App;

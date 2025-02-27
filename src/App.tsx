import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import Dashboard from './components/Dashboard/index';
import Settings from './components/Settings';
import Layout from './components/Layout';
import './index.css';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
          </Box>
        </ThemeProvider>
      </Router>
    </AppProvider>
  );
}

export default App;
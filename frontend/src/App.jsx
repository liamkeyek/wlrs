import { useState } from 'react'
import { Container, Typography, Box, AppBar, Toolbar } from '@mui/material'
import WildlifeGraph from './components/WildlifeGraph'
import { getGraphData } from './services/api'

function App() {
  const [graphData, setGraphData] = useState(null)

  // Example data for testing
  const testData = {
    nodes: [
      { id: '1', name: 'Lion' },
      { id: '2', name: 'Tiger' },
      { id: '3', name: 'Leopard' },
    ],
    links: [
      { source: '1', target: '2' },
      { source: '2', target: '3' },
      { source: '1', target: '3' },
    ],
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Wildlife Photo Network
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Wildlife Relationship Graph
          </Typography>
          
          <Box sx={{ 
            width: '100%', 
            height: '600px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <WildlifeGraph data={testData} />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App

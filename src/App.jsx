import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/layout/app/AppLayout'

import { Movie } from './pages/movie/Movie'

import './App.css'

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  )
}

export default App

import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import News from './pages/News.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


function App(){
  return(
    <div className="bg-gray-900">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/news" element={<News />}></Route>

    </Routes>

    <Footer />

    </BrowserRouter>

    </div>
  )
}

export default App
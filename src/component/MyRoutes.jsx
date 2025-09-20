import { Route, Routes } from 'react-router-dom'
import Hero from './Hero/Hero'
import AboutMe from './About/AboutMe'
import Contact from './Contact/Contact'
import Works from './Works/Works'
import Footer from './footer/Footer'

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<Hero></Hero>}></Route>
        <Route path='/about' element ={<AboutMe></AboutMe>}></Route>
        <Route path='/contact' element ={<Contact></Contact>}></Route>
        <Route path='/works' element={<Works></Works>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default MyRoutes

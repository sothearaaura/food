import { Routes , Route } from "react-router-dom"
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import OutSpacial from '../Pages/OutSpacial'
import Contact from "../Pages/Contact"

export default function MainRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/product" element={<Contact/>} />
      <Route path="/outspacial" element={<OutSpacial/>} />
      <Route path="*" element={<h1>404 | Page Not Found</h1>} />
    </Routes>
  )
}
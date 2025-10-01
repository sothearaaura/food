import MainLayout from "./Layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
export default function App(){
  return(
    <>
        <BrowserRouter>
            <MainLayout/>
        </BrowserRouter>
    </>
  )
}
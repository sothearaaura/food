import Slidebar from '../Components/Slidebar';
import Cake from '../Components/Cake';
import Food from '../Components/Food';
import Drink from '../Components/Drink';
import Header from '../Components/Header';
import Fruit from '../Components/Fruit';

export default function Home() {
  return (
    <>
       <div>
            <div className="px-3" >
                <Header/>
                <Slidebar/>
                <Cake/>
                <Food/>
                <Fruit/>
                <Drink/>
            </div>
       </div>
    </>
  )
}
import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            
            <Card
              img="BBQ.png"
              description="BBQ pulled pork sandwich"
              price="8.50"
              inventory="22"
            />
            <Card
              img="butter.png"
              description="Garlic butter shrimp pasta"
              price="11.50"
              inventory="12"
            />
            <Card
              img="risotto.png"
              description="Creamy mushroom risotto"
              price="7.99"
              inventory="18"
            />
            <Card
              img="diner.png"
              description="Speacy seasoned seafood nodles"
              price="3.99"
              inventory="20"
            />
            <Card
              img="tacos.png"
              description="Beef tacos with salsa"
              price="5.99"
              inventory="20"
            />
            <Card
              img="sushi.png"
              description="Vegetarian sushi roll"
              price="6.50"
              inventory="30"
            />
            <Card
              img="burguer.png"
              description="Bacon cheeseburger with fries"
              price="9.99"
              inventory="25"
            />
            <Card
              img="pizza.png"
              description="Classic margherita pizza"
              price="8.99"
              inventory="15"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
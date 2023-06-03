import React from "react";
import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";
import Card from "./Card";
import scott from "../assets/scott.jpg";
import white from "../assets/white.avif";
import baseball from "../assets/baseball.jpg"
import DressRack from "../assets/DressRack.jpg"
import Dress2 from "../assets/Dress2.jpg"
import pinkDress from "../assets/PinkDress.jpg"
import yellow from "../assets/yellow.webp"
import rosetop from "../assets/Rosetop.jpg"

const Deals = () => {
  const cards = [
    { photo: costume, title: "Men's suit", price: "₹ 5,999" },
    { photo: jacket, title: "Jacket", price: "₹ 1,999" },
    { photo: jacket2, title: "Dress Rack", price: "₹ 999" },
    { photo: jacket3, title: "Women Top", price: "₹ 1,199" },
    { photo: scott, title: "Scott Navy Suit", price: "₹ 8,999" },
    { photo: white, title: "white Suit", price: "₹ 7,299" },
    { photo: yellow, title: "Women Top", price: "₹ 699" },
    { photo: baseball, title: "Jacket", price: "₹ 799" },
    { photo: Dress2, title: "Dress Rack", price: "₹ 1,999" },
    { photo: pinkDress, title: "Women Top", price: "₹ 799" },
    { photo: scott, title: "Scott Navy Suit", price: "₹ 8,999" },
    { photo: DressRack, title: "Dress Rack", price: "₹ 2,599" },
    { photo: jacket3, title: "Women Top", price: "₹ 1,199" },
    { photo: rosetop, title: "Pink Top", price: "₹ 499" },
    { photo: white, title: "white Suit", price: "₹ 7,299" },
    ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 md:w-max xl:w-[70vw] gap-4 mt-4 mx-auto">
        {cards.map((card) => (
          <Card photo={card.photo} title={card.title} price={card.price} />
        ))}
      </div>
    </div>
  );
};

export default Deals;

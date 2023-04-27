/*Luphiwe Sikupela
25/Apr/2023*/

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

/*define MenuBar component*/
const MenuBar = () => {
  const router = useRouter();
  const options = [
    "animation",
    "cartoons",
    "character design",
    "comedy",
    "Design",
    "djing",
    "engineering",
    "game design",
    "fashion",
    "cars",
  ];
  return (
    <div className="menu">
      <div className="nav-items">
        {options.map((option) => (
          <div className={`item ${router.query.name===option && 'active'}`} >
            <Link href={option}>{option}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;

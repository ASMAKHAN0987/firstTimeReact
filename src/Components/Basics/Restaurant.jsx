import { useState } from "react";
import "./Style.css";
import Menu from "./menuApi"
import MenuCard from "./MenuCard";
import Navyy from "./Navyy";

const uniqueList = [...new Set(Menu.map((currElement)=>{
  return currElement.category;
})),"All"];
// console.log(uniqueList);
const Restaurant = () => {
  const [menuData,setMenuData] = useState(Menu);
  const [navData,setNavData] = useState(uniqueList);
  const filterItems = (cat)=>{
    if(cat==="All"){
      setMenuData(Menu);
  }else{
      const updatedList = Menu.filter((list)=>{
          return list.category === cat;
      });
      setMenuData(updatedList);
  }
  // console.log(updatedList);
  // console.log(category);
  }
  return (
    <>
       <Navyy uniqueList={navData} filterItems={filterItems}/>
       <MenuCard menuData={menuData}/>
    </>
    )
}

export default Restaurant
import Menu from "./menuApi"
const Button = ({label, updateIt,category}) => {
    // updateIt(Menu);
    const filterItems = (cat)=>{
            if(cat==="All"){
              updateIt(Menu);
          }else{
              const updatedList = Menu.filter((list)=>{
                  return list.category === cat;
              });
              updateIt(updatedList);
          }
        // console.log(updatedList);
        // console.log(category);
     }
    return (
    <button className="btn-group__item" onClick={()=>filterItems(category)}>{label}</button>
  )
}

export default Button
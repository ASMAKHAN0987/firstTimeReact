// import Button from "./Button"
const Navyy = ({uniqueList,filterItems}) => {
  console.log(uniqueList);
  console.log(filterItems);
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
          {uniqueList.map((currEle)=>{
            return (
         <button className="btn-group__item" onClick={()=>filterItems(currEle)} key={currEle}>{currEle}</button>
          )})};
          </div>
            {/* <Button label='Breakfast' updateIt={updateIt} category={"breakfast"}/>
            <Button label='Lunck' updateIt={updateIt} category={"evening"}/>
            <Button label='Evening' updateIt={updateIt} category={"lunch"}/>
            <Button label='Dinner' updateIt={updateIt} category={"dinner"}/>
            <Button label='All' updateIt={updateIt} category={"All"}/> */}
    </nav>
    </>
  )
}

export default Navyy
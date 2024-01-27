import React, { useState, useEffect } from 'react'
import "./Style.css";
// get the localstorage
const getLocalData = () => {
  const lists = localStorage.getItem("todo");
  return lists ? JSON.parse(lists) : [];

}
const TodoReact = () => {
  const [inputData, setInputData] = useState();
  const [items, setItems] = useState(getLocalData())
  const [edit, editItems] = useState("");
  const [toggleValue, setToogleButton] = useState(false);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  }, [items])
  const listAdd = () => {
    console.log("come");
    if (!inputData) {
      alert('plz fill the data');
    }
    else if (inputData && toggleValue) {
      console.log("wdit")
      setItems(items.map((item) => {
        if (item.id === edit) {
          console.log("match");
          return { ...item, name:inputData}
        }
        return item;
      }));
      setInputData("");
      editItems("");
      setToogleButton(false);
    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      };
      setItems([...items, myNewInputData])
      setInputData("");
    }
  }
  const deleteItem = (index) => {
    const updatedList = items.filter((item) => {
      return item.id !== index;
    })
    setItems(updatedList);
  }
  const deleteAll = () => {
    setItems([]);
  }
  const updatedList = (index) => {
    console.log("click me");
    //  const updateListItem = items.filter((item)=>{
    //      return item.id === index
    //  })
    setToogleButton(true);
    const updateListItem = items.find((item) => {
      return item.id === index
    })
    //  console.log(updateListItem.name);
    //  console.log(updateListItem.id);
    setInputData(updateListItem.name);
    editItems(updateListItem.id);
  }
  const editMe = (change) => {
    // The second approach, which uses immutability, is generally considered better in React applications. It helps maintain a clear and predictable flow of data and state changes, reducing the potential for bugs and unexpected behavior. It's also aligned with React's philosophy of keeping state changes predictable and avoiding direct mutations of state.
    // const updating =  items.map((item)=>{
    //           if(item.id === edit.id){
    //             item.name = inputData;
    //           }
    //           return item;
    //      })
    // setItems(items.map((item) => {
    //   if (item.id === edit.id) {
    //     return { ...item, inputData }
    //   }
    //   return item;
    // }));
    // console.log("now updated");
    // console.log(inputData);
    // console.log(edit);
    // console.log(updating);
    // setItems(updating);
    // setInputData("");
    // setToogleButton(false);
  }
  return (
    <div className='main-div'>
      <div className="child-div">
        <figure>
          <img src="./images/todo.svg" alt="todologo" />
          <figcaption>Add Your list here ✌</figcaption>
        </figure>
        <div className="addItems">
          <input type="text" name="" id="" placeholder='✍ Add Item' className='form-control' value={inputData} onChange={(event) => setInputData(event.target.value)} />
          {toggleValue ? <i className="far fa-edit add-btn" onClick={listAdd}></i> : <i className="fa fa-plus add-btn" onClick={listAdd}></i>}
        </div>
        {/* Show Our Items */}
        <div className='showItems'>
          {items.map((item, index) => {
            return (
              <div className='eachItem' key={index}>
                <h3>{item.name}</h3>
                <div className='todo-btn'>
                  <i className="far fa-edit add-btn" onClick={() => updatedList(item.id)}></i>
                  <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(item.id)}></i>
                </div>
              </div>
            )
          })}
        </div>
        <div className="showItems"><button className='btn effect04' data-sm-link-text="Remove All" onClick={deleteAll}>
          <span> CHECK LIST</span></button></div>
      </div>
    </div>
  )
}

export default TodoReact
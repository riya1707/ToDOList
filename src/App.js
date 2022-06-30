import React from 'react';
import { useState } from 'react';
import ToDoLists from './ToDoLists';


const App = ()=>{

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event)=> {
    setInputList(event.target.value);
  };

  const deleteItem = (id)=>{
    console.log('deleted');

    setItems((prev) => {
      return prev.filter((arrElem, index) => {
        return index !== id;
      })
    })

  }

  const listOfItems = (e)=>{
    e.preventDefault();
    setItems((prev)=>{
      return [...prev, inputList];
    });
    setInputList('');
  }

  return (
    <>
       <div className="main_div">       
          <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <form onSubmit={listOfItems}>
            <input type="text" placeholder='Add Items' 
               value={inputList}
            onChange={itemEvent}/>
            <button type="submit"> + </button>

            <ol>
            {/* <li> {inputList} </li> */}

            {Items.map((itemval, index) => {
              return <ToDoLists 
              key={index}
              id={index} 
              text = {itemval}
              onSelect = {deleteItem}
              />
            })}

            </ol>
            </form>
          </div>
       </div>
    </>
  );
};

export default App;
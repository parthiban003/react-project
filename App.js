import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Hook from './Hook';
import Effect from './Effect';
import Ref from './Ref';
import  Form from './Form';
import Leyout from './Leyout';
import Effect2 from './Effect2';
import React, { useState } from 'react'
import Additem from './Additem';
import Searchitem from './Searchitem';
import Dummy from './Dummy';

function App() {

  const [items, setItems] = useState (
    JSON.parse(localStorage.getItem('todo_list'))
      );

      const [newItem, setNewItem] = useState('')

      const addItem = (item) => {
        const id = items.length ? items[items.length -1].id +1 : 1;
        const addNewItem = {id, checked:false, item}
        const listItems = [...items, addNewItem]
        setItems(listItems)
        localStorage.setItem('todo_list', JSON.stringify(listItems))
      }
    
      const handleCheck = (id) => {
        const listItems = items.map((item) => 
        item.id===id ? {...item,checked:!item.checked} : item)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify
          (listItems)
        )
      }
  
      const handleDelete = (id) => {
         const listItems = items.filter((item) => 
        item.id!==id)
         setItems(listItems)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        if (!newItem) return;
        console.log(newItem)
        addItem(newItem)
        setNewItem('')
      }

  return (
    <div>
      <Header title = 'To Do List'/>
      <Additem
         newItem = {newItem}
         setNewItem = {setNewItem}
         handleSubmit = {handleSubmit}
      />
      <Searchitem/>
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      /><br/><hr />
      <Dummy/>
      <Effect/><br /><hr />
      <Ref/><br /><hr />
      <Form/><br /><hr />
      <Effect2/><br /><hr />
      <Leyout/><br /><hr />
      <Footer
       length = {items.length}
      />
      
    </div>
  );
   
}
export default App;


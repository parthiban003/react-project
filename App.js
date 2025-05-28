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
import React, { useState, useEffect } from 'react'
import Additem from './Additem';
import Searchitem from './Searchitem';
import Dummy from './Dummy';
import apiRequest from './Apirequest';


function App() {

  const API_URL = "http://localhost:3500/items";
      const [items, setItems] = useState ([]);
      const [newItem, setNewItem] = useState('')
      const [search, setSearch] = useState('')
      const [fetchError, setFetchError] = useState(null);
      const [isLoading, setIsLoading] = useState(true);


      useEffect(() =>{
           const fetchItems = async () => {
            try {
            const response = await fetch(API_URL);
            if (!response.ok) throw Error("Data not Received")
            const listItems = await response.json();
            setItems(listItems);
            setFetchError(null)
            } catch (err){
               setFetchError(err.message)
            } finally {
              setIsLoading(false)
            }
           } 
          setTimeout(() =>{
             (async () => await fetchItems())()
          },2000)
      },[])


      const addItem = async (item) => {
        const id = items.length ? items[items.length -1].id +1 : 1;
        const addNewItem = {id, checked:false, item}
        const listItems = [...items, addNewItem]
        setItems(listItems)

        const postOption = {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(addNewItem)
        }
        
        const result = await apiRequest(API_URL, postOption)
        if (result) setFetchError(result)
      }
    
      const handleCheck = async (id) => {
        const listItems = items.map((item) => 
        item.id===id ? {...item,checked:!item.checked} : item)
        setItems(listItems)


         const myItem = listItems.filter((item)=>item.id===id)
         const updateOption = {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({checked:myItem[0].checked})
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, updateOption)
        if (result) setFetchError(result)
        
      }
  
      const handleDelete = async (id) => {
         const listItems = items.filter((item) => 
        item.id!==id)
         setItems(listItems)

         const deleteOption = {method: 'DELETE'}
      
          const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, deleteOption)
        if (result) setFetchError(result)
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
      <br />
      <Header title = 'To Do List'/>
      <Additem
         newItem = {newItem}
         setNewItem = {setNewItem}
         handleSubmit = {handleSubmit}
      />
      <Searchitem 
      search = {search}
      setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items = {items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
      />}
      </main>
      {/* <Dummy/>
      <Effect/><br /><hr />
      <Ref/><br /><hr />
      <Form/><br /><hr />
      <Effect2/><br /><hr />
      <Leyout/><br /><hr /> */}
      <Footer
       length = {items.length}
      />
      
    </div>
  );
   
}
export default App;


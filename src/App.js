import React from "react";
import  './App.css';
import { useState } from "react";
function App() {
  const[list,setlist]=useState([]);
  const[todo,settodo]=useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1 >ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">  
        <input    value={todo} onChange={(e) => settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {todo.length === 0  ||  list.includes(todo) ? null :  (
        <i onClick={() => setlist([...list, {id:Date.now() ,text:todo,status:false}])} className="fas fa-plus"></i>
       )  }
      </div>
      <div className="todos">
        {list.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.checked);
                  setlist(list.filter(a=>{
                    if(a.id===obj.id){
                      a.status=e.target.checked
                    }
                    return a
                  }))           
                }}
           value={obj.status}type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>setlist(list.filter(i => i!== obj))} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
        <br/>
  <br/>

              <div className="table">
                {list.length >0 ?(
                <table>
                  <tbody>
                <tr>
                  <th><strong>Active Tasks</strong></th>
                  </tr>
                  
                  {list.map((obj)=>{
                    if(obj.status){
                      return(
                        <tr key={obj.text}> 
                    <td>
                      <h2>{obj.text}</h2>
                    </td>
                  </tr>
                      )
                    }
                    return null; 
                   } ) }
                   </tbody>
                   </table>
                ):(
                  <h1> no active tasks</h1>
                )}
           </div>
    </div> 
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import db from './firebase';
import Todo from "./Todo";
import firebase from 'firebase';
import { FormControl, Input, InputLabel,Button } from '@material-ui/core';

function App() {
  const [todos, setTodos]=useState([]);
  const[input, setInput]=useState('');

  //when the app loads, we need to listen to the database and fetch new todos as they got added or removed
  useEffect(() => {
    console.log("I ran when the component loaded");

    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const addTodo=(event)=>{
    event.preventDefault();

    db.collection('todos').add({
      title:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //clearup theinput after add todo is clicked
  }



  return (
    <div className="App">
      <h1>Todo app</h1>
      <form>
        <FormControl>
          <InputLabel>write a todo</InputLabel>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo}>
          Add todo
        </Button>
      </form>

      {todos.map((todo, i) => (
        <Todo title={todo} key={i} />
      ))}
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';


import './app.css';

export default class App extends Component {

    // starting generate Id from 100

    maxId = 100;

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        
        this.setState( ( { todoData } ) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // console.log(idx);
            // using splice don't use because these is changing the state
            // todoData.splice(idx, 1);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        });
        
    };
    addItem = (text) => {
        // generate id ?
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        // add element in array ?

        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            };
        });
        console.log('Added', text);
        
    };

   render(){
       return (
           <div className="todo-app">
               <AppHeader toDo={1} done={3} />
               <div className="top-panel d-flex">
                   <SearchPanel />
                   <ItemStatusFilter />
               </div>

               <TodoList
                   todos={ this.state.todoData }
                   onDeleted={ this.deleteItem }
               />
               <ItemAddForm onItemAdded={this.addItem}/>
           </div>
       );
   }

    
};
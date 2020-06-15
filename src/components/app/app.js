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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
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
        const newItem = this.createTodoItem(text);
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        // 1.update object
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        // 2. construct new Array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleDone = (id) => {
        this.setState( ({todoData}) => {
            
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        } );
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
        
    };
    

   render(){

    const { todoData } = this.state;

    const doneCount = todoData
                        .filter( (el) => el.done)
                        .length;
    const todoCount = todoData.length - doneCount;

       return (
           <div className="todo-app">
               <AppHeader toDo={todoCount} done={doneCount} />
               <div className="top-panel d-flex">
                   <SearchPanel />
                   <ItemStatusFilter />
               </div>

               <TodoList
                   todos={ todoData }
                   onDeleted={ this.deleteItem }
                   onToggleImportant={this.onToggleImportant}
                   onToggleDone={this.onToggleDone}
               />
               <ItemAddForm onItemAdded={this.addItem}/>
           </div>
       );
   }

    
};
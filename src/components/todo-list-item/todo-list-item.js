import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    // using state component
    // new and without constructor

    state = {
            done: false
        };

    // constructor(){

    //     super();

    //     this.state = {
    //         done: false
    //     };
    // }
    
    // using proposal class fields
    
    onLabelClick = () => {
        // console.log(`Done ${this.props.label}`);
        this.setState({
            done: true
        });
    };

    // we use code above to change code with constructor
    
    
    // constructor(){
    //     super();

    //     this.onLabelClick = () => {
    //         console.log(`Done ${this.props.label}`);
    //     }
        
    // }


    render(){

        const { label, important = false } = this.props;

        const { done } = this.state;

        let classNames = 'todo-list-item';

        if(done) {
            classNames += ' done';
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={ this.onLabelClick }>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}

// instead this function we use a class component


// const TodoListItemFunc = ({ label, important = false }) => {

//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };

//     return (
//         <span className="todo-list-item">
//             <span
//                 className="todo-list-item-label"
//                 style={style}>
//                 {label}
//             </span>

//             <button type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation" />
//             </button>

//             <button type="button"
//                 className="btn btn-outline-danger btn-sm float-right">
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//     );
// };

// export default TodoListItem;
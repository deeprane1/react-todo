import React from 'react'
import './TodoList.css'
import Todo from './Todo'


class TodoList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            todoList: [
                {
                    content: "Test 1",
                    done: true
                },
                {
                    content: "Test 2",
                    done: false
                },
                {
                    content: "Test 3",
                    done: false
                }
            ],
            input: ''
        }

        this.addTodo = (text) => this.setState( (state) => {

            let copy =  state.todoList.slice()
            copy.push({content: text, done: false})
    
            return { todoList : copy }

        } )

        this.removeTodo =  (index) => {

            this.setState( (state) => 
            {
                if(state.todoList.length != 0)
                {
                    let copy = state.todoList.slice()
                    
                    return {
                        todoList: copy.filter( (k,i) => i!=index )
                    }
                }

                return null
            } )
        }
        

    }

    render(){

        
        let len = this.state.todoList.length
        let isEmpty = len > 0 ? `[${len}]` : ` is empty`

        return (
        <div id="todo-list">
            <div id='todo-list-base' >
                <div className='text-xxl'> Your todo {isEmpty}  </div>

                <div className='todo-base'>
                    { this.state.todoList.map( (k,i) => (<Todo todo={k} key={i} index={i} delete={this.removeTodo}></Todo>) ) }
                </div>

                <div className='todo-input' >
                    <input type="text" placeholder="Add a new todo"
                        onChange={ (e)=> this.setState({input: e.target.value}) }
                    />
                    <input type="button" value="submit" onClick={ () => this.state.input.length && this.addTodo(this.state.input)  }></input>
                </div>
            </div>
        </div>
        )
    }
}   


export default TodoList
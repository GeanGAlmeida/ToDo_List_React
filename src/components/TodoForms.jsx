import React, {useState} from 'react'

const TodoForms = ({addTodo}) => {
    const [value,setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Qual é a tarefa para hoje?' onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>Adicionar Tarefa</button>
    </form>
  )
}

export default TodoForms

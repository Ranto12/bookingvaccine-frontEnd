import React from 'react'

const Form = ({handlePassword, handleUsername}) => {
  return (
    <div>
        <label>
            username
        </label>
            <input type="text" placeholder="username" onChange={handleUsername}></input>
        <label>
            password
            <input 
            type="password" 
            placeholder="Pasword"
            onChange={handlePassword}
            />
        </label>
    </div>
  )
}

export default Form

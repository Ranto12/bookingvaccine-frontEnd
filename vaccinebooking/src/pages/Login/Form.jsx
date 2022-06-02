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
        

        
       {/* {inputs && inputs.map((input, inputIdx)=>(
              <div key={inputIdx}>
                <label >
                  {input.label}
                </label>
                <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={input.value}
                onChange={(e)=> handleInput(e.target.value, inputIdx)}
                required
                />
              </div>
                ))} */}
    </div>
  )
}

export default Form

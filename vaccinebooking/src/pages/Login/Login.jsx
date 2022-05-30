import React, { useState } from 'react'

const Login = () => {
    //state and variables
    const [inputs , setInputs] = useState([
        {
            label: "Username",
            name: "username",
            type: "text",
            placeholder: "Username",
            value: "",
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Password",
            value: "",
        }
    ]);

    //funtion 
    const handleInput = (value, index)=>{
      const newInputs = inputs.map((input, inputIdx)=>{
        if(inputIdx === index){
          return{
            ...input,
            value: value
          };
        }
        return input;
      });
      setInputs(newInputs)
    };

  return (
    <div>
      <div>
        <div>
          VACCINE
        </div>
        <form onSubmit={()=>{}}>
            {inputs && inputs.map((input, inputIdx)=>(
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
            ))}
        </form>
      </div>
      <div>
        
      </div>
    </div>
  )
}
export default Login
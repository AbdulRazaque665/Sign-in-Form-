import React, { useEffect, useState } from 'react'
import "./form.css"

const Form = () => {
    const [formValues, setformValues] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
    const [formErrors, SetFormErrors] = useState({fNameErr:false,lNameErr:false,emailErr:false,passErr:false,confirmPassErr:false})
    const {firstName,lastName,email,password,confirmPassword} = formValues
    const {fNameErr,lNameErr,emailErr,passErr,confirmPassErr} = formErrors

    const signInHandler = (e)=> {
        e.preventDefault()
        if(firstName === ""){
            SetFormErrors({...formErrors,fNameErr:true})
        } else if(lastName === ""){
            SetFormErrors({...formErrors,lNameErr:true})
        } else if(email === ""){
            SetFormErrors({...formErrors,emailErr:true})
        } else if(password === ""){
            SetFormErrors({...formErrors,passErr:true})
        }else if(confirmPassword === ""){
            SetFormErrors({...formErrors,confirmPassErr:true})
        }
    }
    useEffect(()=>{
        if(firstName !== ""){
            SetFormErrors({...formErrors,fNameErr:false})
        }
        if(lastName !== ""){
            SetFormErrors({...formErrors,lNameErr:false})
        }
        if(email !== ""){
            SetFormErrors({...formErrors,emailErr:false})
        }
        if(password !== ""){
            SetFormErrors({...formErrors,passErr:false})
        }
        if(confirmPassword !== ""){
            SetFormErrors({...formErrors,confirmPassErr:false})
        }

        
    })


  return (
   <>
   <main style={{height:"100vh"}} className="w-100 form-signin m-auto d-flex align-items-center justify-content-center">
  <form style={{width:"30%"}} onSubmit={signInHandler}>
    <h1 class="h3 mb-3 fw-normal">Sign in</h1>

    <div class="form-floating mb-3">
      <input style={{border: fNameErr && "3px solid red"}} type="text" class="form-control " id="floatingInput" placeholder="First Name" onChange={(e)=>{setformValues({...formValues,firstName: e.target.value})}}/>
      <label for="floatingInput">First Name</label>
      {fNameErr && (<span className='text-danger mt-0'>Enter First Name</span>)}
    </div>

    <div class="form-floating mb-3">
      <input style={{border: lNameErr && "3px solid red"}} type="text" class="form-control " id="floatingInput" placeholder="Last Name" onChange={(e)=>{setformValues({...formValues,lastName: e.target.value})}}/>
      <label for="floatingInput">Last Name</label>
      {lNameErr && (<span className='text-danger mt-0'>Enter Last Name</span>)}
    </div>

    <div class="form-floating mb-3">
      <input style={{border: emailErr && "3px solid red"}} type="email" class="form-control " id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setformValues({...formValues,email: e.target.value})}}/>
      <label for="floatingInput">Email address</label>
      {emailErr && (<span className='text-danger mt-0'>Enter Email</span>)}
    </div>

    <div class="form-floating mb-3">
      <input style={{border: passErr && "3px solid red"}} type="password" class="form-control " id="floatingInput" placeholder="Password" onChange={(e)=>{setformValues({...formValues,password: e.target.value})}}/>
      <label for="floatingInput">Password</label>
      {passErr && (<span className='text-danger mt-0'>Enter Password</span>)}
    </div>
    <div class="form-floating">
      <input style={{border: confirmPassErr && "3px solid red"}} type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" onChange={(e)=>{setformValues({...formValues,confirmPassword: e.target.value})}}/>
      <label for="floatingPassword">Confirm Password</label>
     {confirmPassErr && (<span className='text-danger mt-0'>Enter Confirm Password</span>)}
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>
</main>
</>
  )
}

export default Form

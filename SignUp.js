import React, {useState,setState} from 'react';
import '../Base.css';
function SignUp() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
      <>
      <h3>Sign Up</h3>
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="form-container"> 
                  <form id="SignUpForm">
                  <input type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="Enter first name" />
                    <input type="text" value={lastName} onChange = {(e) => handleInputChange(e)} id="lasttName" placeholder="Enter last name" />
                    <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter your Email"/>
                    <input type="password" id="password" value={password} onChange = {(e) => handleInputChange(e)}placeholder="Enter your password" />
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Re-enter your password" />
                    <button type="submit" onClick={()=>handleSubmit()}>Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )       
}

export default SignUp
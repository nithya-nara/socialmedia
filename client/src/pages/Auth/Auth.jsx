import React,{useState} from 'react'
import './Auth.css'
import icon from '../../assests/icon.png'
import AboutAuth from './AboutAuth'
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const handleSwitch =() =>{
    setIsSignup(!isSignup)
  }
  return (
    <div>
      <section className='auth-section'>
        {
          isSignup && <AboutAuth/>
        }
            <div className='auth-container-2'>
             {! isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
            <form>
              {
                isSignup && (
                  <label htmlFor='name'>
                    <h4>Display Name</h4>
                    <input type="text" name='name' id='name' />
                  </label>
                )
              }
              <label htmlFor='email'>
                <h4>Email</h4>
                <input type="email" name='name' id='email'/>
              </label>
              <label htmlFor='password'>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4>password</h4>
                { !isSignup &&  <p style={{fontSize:"13px", color:"#007ac6"}}>forgot password?</p>}
                </div>
                <input type="password" name='password' id='password'/>
                {isSignup && <p  style={{fontSize:"13px", color:"grey"}}>passwords must contain at least eight characters<br/>including at least 1 letter and 1 number</p> }
              </label>
              {
                isSignup &&(
                  <label htmlFor='check'>
                      <input type="checkbox" id="check"/>
                      < p style={{fontSize:"13px"}}> Opt-in to receive occasional product updates,<br/> user research invitations, company<br/> announcements, and digests.</p>
                  </label>
                )
              }
              <button type='submit' className='auth-btn'>{isSignup ? 'signup': 'Login'} </button>
             {
               isSignup &&(
                <p style={{ fontSize:"13px",color:"grey"}}>
                  By clicking “Sign up”, you agree to our <br/>
                  <span style={{color:"#007ac6"}}>terms of service</span> and acknowledge that<br/> you have read and understand our<br/> <span style={{color:"#007ac6"}}>privacy policy</span> and <span style={{color:"#007ac6"}}>code of conduct.</span>
                </p>
               )
             }
            </form>
            <p>
              {isSignup ? 'already have an account?' : 'Don`t have an account'}
              <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "signup"}</button>
            </p>
            </div>
      </section>
    
    </div>
  )
}

export default Auth

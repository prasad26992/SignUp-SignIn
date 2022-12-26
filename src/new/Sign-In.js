import React from 'react'
import './SignIn.css';


function SignIn() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='header'>Welcome Back!</div>
                    <div className='sub-header'> <u>The faster you fill up, the faster you get offers.</u></div>

                    <form>
                        <input type='text' className='email' placeholder='Enter your email please...'/>
                        <input type='password' className='pass' placeholder='Enter your email please...'/>
                        <button type='button' className='btn-1'>Sign In</button>
                        <p className='or'>OR</p>
                        <button type='submit' className='btn-g'>Sign in with Google</button>
                        <button type='submit' className='btn-f'>Sign in with Facebook</button>                        
                    </form>
                    <p className='footer'>Don’t have an account? Sign up</p>
                </div>
                <div className='col-md-6'>
                    <div className='image'>
                    <img src='./1.png' alt=''/>                    
                    </div>
                    <div className='kling'>
                 <img src='./Kling.png' alt='' />
                 </div>
                 <div className='shop2cash'>
                 <img src='./Shop2Cash.png' alt='' />
                 </div>
                 <div className='img1'><img src='/image1.png' alt=''/></div>
                 <div className='img2'><img src='/image2.png' alt=''/></div>
                 <div className='img3'><img src='/image3.png' alt=''/></div>
                 <div className='img4'><img src='/image4.png' alt=''/></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignIn;
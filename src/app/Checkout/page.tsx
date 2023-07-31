import React from 'react'
import "./Checkout.scss"
import Sumarry from '@/components/cart/Sumarry'
import Link from 'next/link'

const Checkout = () => {
  return (
    <>
      <div className='checkout'>

        <div className="back-link">
          
        <Link href="" className='link'>Go Back</Link>
       </div>
        

        <div className="wrapper">


          <form action="" className='main-form'>
            <h2>Checkout</h2>
            <div className="main-form-wrapper">

            
              <div className="input_billing_details">
                <h6>Billing details</h6>
                <div className="wrapper">

                  <div className="fieldinput">
                    <label htmlFor="name" className='name-label'>Name</label>    
                <input type="text" placeholder='Your Name here' className='field-input' />
                  

                  </div>
               
                  
               
                  <div className="fieldinput">
                    <label htmlFor="name" className='name-label'>Email Address</label>    
                <input type="text" placeholder='Your Email Address' className='field-input' />
                  

                  </div>
                  

                </div>
                
              
                 
                
        </div>
        <div className="input_shipping_info">
        </div>
        <div className="input_payment_details">

              </div>
              </div>

          </form>


      
            <Sumarry />

     
     
      </div>
    
         </div>
        </>
  )
}

export default Checkout
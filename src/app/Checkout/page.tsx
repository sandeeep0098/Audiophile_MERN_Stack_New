'use client';
import React from 'react';
import './Checkout.scss';
import Sumarry from '@/components/cart/Sumarry';
import Link from 'next/link';

import { useRef, useState } from 'react';

const Checkout = () => {
  // const router = useRouter();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const mobileInputRef = useRef();
  const addressInputRef = useRef();

  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    // email: true,
    // phone: true,
    // address: true,
  });

  const isEmpty = (value) => value.trim().length === '';

  const handleGoBack = () => {
    window.history.back();
  };
  const formSubmitHandler = (event: any) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const enteredNameIsValid = isEmpty(enteredName);
    // const enteredEmailIsValid = !isEmpty(enteredEmail);
    // const enteredAddressIsValid = !isEmpty(enteredAddress);
    // const enteredPhoneIsValid = !isEmpty(enteredMobile);

    setFormInputIsValid({
      name: enteredNameIsValid,
      // email: enteredEmailIsValid,
      // address: enteredAddressIsValid,
      // phone: enteredPhoneIsValid,
    });

    const formIsValid = enteredNameIsValid;

    if (!formIsValid) {
      console.log('Invalid form input:', formInputIsValid);
      return;
    }

    console.log(
      enteredNameIsValid,
      enteredEmailIsValid,
      enteredAddressIsValid,
      enteredPhoneIsValid
    );
  };

  return (
    <>
      <div className="checkout">
        <div className="back-link">
          <Link href="/" className="link" onClick={handleGoBack}>
            Go Back
          </Link>
        </div>

        <div className="wrapper">
          <form onSubmit={formSubmitHandler} className="main-form">
            <h2>Checkout</h2>
            <div className="main-form-wrapper">
              <div className="input_billing_details">
                <h6>Billing details</h6>
                <div className="wrapper-input">
                  <div className="fieldinput">
                    <label htmlFor="name" className="name-label">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name here"
                      className="field-input"
                      id="name"
                      ref={nameInputRef}
                    />
                    {!formInputIsValid.name && (
                      <p>Ye vedya form input thik se daal</p>
                    )}
                  </div>
                  <div className="fieldinput">
                    <label htmlFor="email" className="name-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      className="field-input"
                      id="email"
                      ref={emailInputRef}
                    />
                  </div>
                  <div className="fieldinput">
                    <label htmlFor="phone-no" className="name-label">
                      Your mobile no
                    </label>
                    <input
                      type="text"
                      placeholder="Your mobile No:"
                      className="field-input"
                      id="phone-no"
                      ref={mobileInputRef}
                    />
                  </div>
                  <div className="fieldinput">
                    <label htmlFor="city" className="name-label">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Your Address:"
                      className="field-input"
                      id="city"
                      ref={addressInputRef}
                    />
                  </div>
                  {/* <ProductLinkPrimaryButton
                    path=""
                    type="primary"
                    name="Submit"
                  /> */}
                  <button>Button</button>
                </div>
              </div>
              <div className="input_shipping_info"></div>
              <div className="input_payment_details"></div>
            </div>
          </form>

          <Sumarry />
        </div>
      </div>
    </>
  );
};

export default Checkout;

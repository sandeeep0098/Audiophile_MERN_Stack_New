'use client';
import React, { useState } from 'react';
import styles from './CheckoutForm.module.scss';
import Link from 'next/link';
import Summary from '@/components/cart/Sumarry';

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log('form submited');
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const nameInputClasses = nameInputIsInvalid
    ? `${styles.formGroup} ${styles.formGroupInvalid}`
    : styles.formGroup;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.back_link}>
          <Link href="/" className={styles.link} onClick={handleGoBack}>
            Go Back
          </Link>
        </div>
        <div className={styles.wrapper_form}>
          <form className={styles.checkoutForm} onSubmit={formSubmitHandler}>
            <div className={styles.formSection}>
              <h1>Checkout</h1>
              <h2>Billing Details</h2>
              <div className={nameInputClasses}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                  value={enteredName}
                />
              </div>
              {nameInputIsInvalid && (
                <p className={styles.errorText}>Name must not be empty.</p>
              )}
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone No:</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <h2>Shipping Info</h2>
              <div className={styles.formGroup}>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" placeholder="Enter your city" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zip">Zip Code:</label>
                <input type="text" id="zip" placeholder="Enter your zip code" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter your country"
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <h2>Payment Details</h2>
              <div className={styles.formGroup}>
                <label>Payment Method:</label>
                <div className={styles.paymentMethod}>
                  <input
                    type="radio"
                    id="cash"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="cash">Cash on Delivery</label>
                  <input
                    type="radio"
                    id="emoney"
                    value="emoney"
                    checked={paymentMethod === 'emoney'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="emoney">E-Money</label>
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
          <Summary />
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

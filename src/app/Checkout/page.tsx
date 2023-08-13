'use client';
import React, { useState } from 'react';
import styles from './CheckoutForm.module.scss';
import Link from 'next/link';
import Summary from '@/components/cart/Sumarry';

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPhoneNumberIsTouched, setEnteredPhoneNumberIsTouched] =
    useState(false);
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');

  const phoneNumberPattern = /^[0-9]*$/;

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid =
    enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const enteredPhoneNumberIsValid =
    enteredPhoneNumber.trim() !== '' &&
    enteredPhoneNumber.length >= 10 &&
    phoneNumberPattern.test(enteredPhoneNumber);
  const enteredPhoneNumberIsInvalid =
    !enteredPhoneNumberIsValid && enteredPhoneNumberIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  const phoneInputChangeHandler = (e) => {
    setEnteredPhoneNumber(e.target.value);
  };
  const phoneInputBlurHandler = () => {
    setEnteredPhoneNumberIsTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPhoneNumberIsTouched(true);
    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneNumberIsValid
    ) {
      return;
    }
    console.log('form submitted');
    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredPhoneNumber);
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
    setEnteredPhoneNumber('');
    setEnteredPhoneNumberIsTouched(false);
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
  const emailInputClasses = enteredEmailIsInvalid
    ? `${styles.formGroup} ${styles.formGroupInvalid}`
    : styles.formGroup;
  const phoneInputClasses = enteredPhoneNumberIsInvalid
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
                {nameInputIsInvalid && (
                  <p className={styles.errorText}>Name must not be empty.</p>
                )}
              </div>

              <div className={emailInputClasses}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={enteredEmail}
                />
                {enteredEmailIsInvalid && (
                  <p className={styles.errorText}>
                    Email must include @ and should not be empty.
                  </p>
                )}
              </div>
              <div className={phoneInputClasses}>
                <label htmlFor="phone">Phone No:</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={enteredPhoneNumber}
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneInputBlurHandler}
                />
                {enteredPhoneNumberIsInvalid && (
                  <p className={styles.errorText}>
                    Phone No Should Contain 10 digits
                  </p>
                )}
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
                {paymentMethod === 'emoney' && (
                  <div className={styles.emoneyDetails}>
                    <div className={styles.formGroup}>
                      <label htmlFor="cardno">Enter Card No:</label>
                      <input
                        type="text"
                        id="cardno"
                        placeholder="Enter your card number"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="cvv">CVV:</label>
                      <input type="text" id="cvv" placeholder="Enter the CVV" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="cardHolderName">
                        Card Holder's Name:
                      </label>
                      <input
                        type="text"
                        id="cardHolderName"
                        placeholder="Enter the card holder's name"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button type="submit" onSubmit={formSubmitHandler}>
              Submit
            </button>
          </form>
          <Summary onSubmit={formSubmitHandler} />
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

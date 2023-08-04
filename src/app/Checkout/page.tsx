'use client';
import React, { useState, useRef } from 'react';
import styles from './CheckoutForm.module.scss';
import Summary from '@/components/cart/Sumarry';
import Link from 'next/link';

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [cityError, setCityError] = useState('');
  const [zipError, setZipError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [cardNoError, setCardNoError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [cardHolderNameError, setCardHolderNameError] = useState('');

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const zipInputRef = useRef();
  const countryInputRef = useRef();
  const cardNoInputRef = useRef();
  const cvvInputRef = useRef();
  const cardHolderNameInputRef = useRef();

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const validateInputs = () => {
    let isValid = true;

    // Validation for name
    if (nameInputRef.current.value.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validation for phone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInputRef.current.value)) {
      setPhoneError('Invalid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInputRef.current.value)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validation for address
    if (addressInputRef.current.value.trim() === '') {
      setAddressError('Address is required');
      isValid = false;
    } else {
      setAddressError('');
    }

    // Validation for city
    if (cityInputRef.current.value.trim() === '') {
      setCityError('City is required');
      isValid = false;
    } else {
      setCityError('');
    }

    // Validation for zip
    if (zipInputRef.current.value.trim() === '') {
      setZipError('Zip code is required');
      isValid = false;
    } else {
      setZipError('');
    }

    // Validation for country
    if (countryInputRef.current.value.trim() === '') {
      setCountryError('Country is required');
      isValid = false;
    } else {
      setCountryError('');
    }

    // Validation for card number (if using E-Money)
    if (paymentMethod === 'emoney') {
      if (cardNoInputRef.current.value.trim() === '') {
        setCardNoError('Card number is required');
        isValid = false;
      } else {
        setCardNoError('');
      }
    }

    // Validation for CVV (if using E-Money)
    if (paymentMethod === 'emoney') {
      if (cvvInputRef.current.value.trim() === '') {
        setCvvError('CVV is required');
        isValid = false;
      } else {
        setCvvError('');
      }
    }

    // Validation for card holder's name (if using E-Money)
    if (paymentMethod === 'emoney') {
      if (cardHolderNameInputRef.current.value.trim() === '') {
        setCardHolderNameError("Card holder's name is required");
        isValid = false;
      } else {
        setCardHolderNameError('');
      }
    }

    return isValid;
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const isFormValid = validateInputs();
    if (isFormValid) {
      console.log('form submitted');
      const enteredName = nameInputRef.current.value;
      const enteredPhone = phoneInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredCity = cityInputRef.current.value;
      const enteredZip = zipInputRef.current.value;
      const enteredCountry = countryInputRef.current.value;
      const enteredCardNo = cardNoInputRef.current.value;
      const enteredCvv = cvvInputRef.current.value;
      const enteredCardHolderName = cardHolderNameInputRef.current.value;

      // Perform form submission logic here with the validated data
      console.log(
        enteredCardHolderName,
        enteredCardNo,
        enteredCardHolderName,
        enteredName,
        enteredCountry,
        enteredPhone,
        enteredAddress,
        enteredPhone,
        enteredCvv,
        enteredZip,
        enteredEmail,
        enteredCity
      );
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.back_link}>
          <Link href="/" className={styles.link} onClick={handleGoBack}>
            Go Back
          </Link>
        </div>
        <div className={styles.wrapper_form}>
          <form className={styles.checkoutForm} onSubmit={submitFormHandler}>
            {/* Section 1: Billing Details */}
            <div className={styles.formSection}>
              <h1>Checkout</h1>
              <h2>Billing Details</h2>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  ref={nameInputRef}
                  placeholder="Enter your name"
                />
                {nameError && <p className={styles.errorText}>{nameError}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone No:</label>
                <input
                  type="tel"
                  id="phone"
                  ref={phoneInputRef}
                  required
                  placeholder="Enter your phone number"
                />
                {phoneError && <p className={styles.errorText}>{phoneError}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  ref={emailInputRef}
                  required
                  placeholder="Enter your email address"
                />
                {emailError && <p className={styles.errorText}>{emailError}</p>}
              </div>
            </div>

            {/* Section 2: Shipping Info */}
            <div className={styles.formSection}>
              <h2>Shipping Info</h2>
              <div className={styles.formGroup}>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  ref={addressInputRef}
                  required
                  placeholder="Enter your address"
                />
                {addressError && (
                  <p className={styles.errorText}>{addressError}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  ref={cityInputRef}
                  required
                  placeholder="Enter your city"
                />
                {cityError && <p className={styles.errorText}>{cityError}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zip">Zip Code:</label>
                <input
                  type="text"
                  id="zip"
                  ref={zipInputRef}
                  required
                  placeholder="Enter your zip code"
                />
                {zipError && <p className={styles.errorText}>{zipError}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  ref={countryInputRef}
                  required
                  placeholder="Enter your country"
                />
                {countryError && (
                  <p className={styles.errorText}>{countryError}</p>
                )}
              </div>
            </div>

            {/* Section 3: Payment Details */}
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
              {paymentMethod === 'emoney' && (
                <div className={styles.emoneyDetails}>
                  <div className={styles.formGroup}>
                    <label htmlFor="cardno">Enter Card No:</label>
                    <input
                      type="text"
                      id="cardno"
                      ref={cardNoInputRef}
                      required
                      placeholder="Enter your card number"
                    />
                    {cardNoError && (
                      <p className={styles.errorText}>{cardNoError}</p>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="cvv">CVV:</label>
                    <input
                      type="text"
                      id="cvv"
                      ref={cvvInputRef}
                      required
                      placeholder="Enter the CVV"
                    />
                    {cvvError && <p className={styles.errorText}>{cvvError}</p>}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="cardHolderName">Card Holder's Name:</label>
                    <input
                      type="text"
                      id="cardHolderName"
                      ref={cardHolderNameInputRef}
                      required
                      placeholder="Enter the card holder's name"
                    />
                    {cardHolderNameError && (
                      <p className={styles.errorText}>{cardHolderNameError}</p>
                    )}
                  </div>
                </div>
              )}
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

'use client';
import React, { useState } from 'react';
import styles from './CheckoutForm.module.scss';
import Link from 'next/link';
import Summary from '@/components/cart/Sumarry';
import OderDetailModalComponent from '@/components/layout/OderDetailModalComponent';
import { headers } from 'next/dist/client/components/headers';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/hooks';
import { useAppSelector } from '@/hooks/hooks';
import { cartActions } from '@/store/cart-slice';
import Product from '@/models/product';
const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPhoneNumberIsTouched, setEnteredPhoneNumberIsTouched] =
    useState(false);
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');
  const [enteredAddressTouched, setEnteredAddressTouched] = useState(false);
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredCityTouched, setEnteredCityTouched] = useState(false);
  const [enteredZipCode, setEnteredZipCode] = useState('');
  const [enteredZipCodeTouched, setEnteredZipCodeTouched] = useState(false);
  const [enteredCountry, setEnteredCountry] = useState('');
  const [enteredCountryTouched, setEnteredCountryTouched] = useState(false);
  const [enteredCardNo, setEnteredCardNo] = useState('');
  const [enteredCardNoTouched, setEnteredCardNoTouched] = useState(false);
  const [enteredCvv, setEnteredCvv] = useState('');
  const [enteredCvvTouched, setEnteredCvvTouched] = useState(false);
  const [enteredCardHolderName, setEnteredCardHolderName] = useState('');
  const [enteredCardHolderNameTouched, setEnteredCardHolderNameTouched] =
    useState(false);
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  const dispatch = useAppDispatch();

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

  const enteredAddressIsValid = enteredAddress.trim() !== '';
  const enteredAddressIsInvalid =
    !enteredAddressIsValid && enteredAddressTouched;

  const enteredCityIsValid = enteredCity.trim() !== '';
  const enteredCityIsInvalid = !enteredCityIsValid && enteredCityTouched;

  const enteredZipCodeIsValid = enteredZipCode.trim() !== '';
  const enteredZipCodeIsInvalid =
    !enteredZipCodeIsValid && enteredZipCodeTouched;

  const enteredCountryIsValid = enteredCountry.trim() !== '';
  const enteredCountryIsInvalid =
    !enteredCountryIsValid && enteredCountryTouched;

  const enteredCardNoIsValid = enteredCardNo.trim() !== '';
  const enteredCardNoIsInvalid = !enteredCardNoIsValid && enteredCardNoTouched;

  const enteredCvvIsValid = enteredCvv.trim() !== '';
  const enteredCvvIsInvalid = !enteredCvvIsValid && enteredCvvTouched;

  const enteredCardHolderNameIsValid = enteredCardHolderName.trim() !== '';
  const enteredCardHolderNameIsInvalid =
    !enteredCardHolderNameIsValid && enteredCardHolderNameTouched;

  // Form validity check

  let formIsValid = false;

  if (
    (enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneNumberIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredZipCodeIsValid &&
      enteredCountryIsValid) ||
    paymentMethod === 'cash' ||
    paymentMethod === 'emoney' ||
    (enteredCardNoIsValid && enteredCvvIsValid && enteredCardHolderNameIsValid)
  ) {
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

  const addressInputChangeHandler = (e) => {
    setEnteredAddress(e.target.value);
  };

  const cityInputChangeHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const zipCodeInputChangeHandler = (e) => {
    setEnteredZipCode(e.target.value);
  };

  const countryInputChangeHandler = (e) => {
    setEnteredCountry(e.target.value);
  };
  const cardNoInputChangeHandler = (e) => {
    setEnteredCardNo(e.target.value);
  };

  const cvvInputChangeHandler = (e) => {
    setEnteredCvv(e.target.value);
  };

  const cardHolderNameInputChangeHandler = (e) => {
    setEnteredCardHolderName(e.target.value);
  };

  const addressInputBlurHandler = () => {
    setEnteredAddressTouched(true);
  };

  const cityInputBlurHandler = () => {
    setEnteredCityTouched(true);
  };

  const zipCodeInputBlurHandler = () => {
    setEnteredZipCodeTouched(true);
  };

  const countryInputBlurHandler = () => {
    setEnteredCountryTouched(true);
  };

  const cardNoInputBlurHandler = () => {
    setEnteredCardNoTouched(true);
  };

  const cvvInputBlurHandler = () => {
    setEnteredCvvTouched(true);
  };

  const cardHolderNameInputBlurHandler = () => {
    setEnteredCardHolderNameTouched(true);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPhoneNumberIsTouched(true);
    setEnteredAddressTouched(true);
    setEnteredCityTouched(true);
    setEnteredZipCodeTouched(true);
    setEnteredCountryTouched(true);
    setEnteredCardNoTouched(true);
    setEnteredCvvTouched(true);
    setEnteredCardHolderNameTouched(true);

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneNumberIsValid ||
      !enteredAddressIsValid ||
      !enteredCityIsValid ||
      !enteredZipCodeIsValid ||
      !enteredCountryIsValid ||
      (paymentMethod === 'emoney' &&
        (!enteredCardNoIsValid ||
          !enteredCvvIsValid ||
          !enteredCardHolderNameIsValid))
    ) {
      return;
    }

    console.log('form submitted');
    console.log('Entered Name:', enteredName);
    console.log('Entered Email:', enteredEmail);
    console.log('Entered Phone Number:', enteredPhoneNumber);
    console.log('Entered Address:', enteredAddress);
    console.log('Entered City:', enteredCity);
    console.log('Entered Zip Code:', enteredZipCode);
    console.log('entered payment method:', paymentMethod);
    console.log('Entered Country:', enteredCountry);
    console.log('Entered Card No:', enteredCardNo);
    console.log('Entered CVV:', enteredCvv);
    console.log('Entered Card Holder Name:', enteredCardHolderName);
    try {
      const res = await fetch(
        'https://audiophile-mern-stack-new-hcz5.vercel.app/api/userinputs',
        {
          // const res = await fetch('http://localhost:3000/api/userinputs', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },

          body: JSON.stringify({
            enteredName,
            enteredEmail,
            enteredPhoneNumber,
            enteredAddress,
            enteredCity,
            enteredZipCode,
            paymentMethod,
            enteredCountry,
            enteredCardNo,
            enteredCvv,
            enteredCardHolderName,
          }),
        }
      );
      if (res.ok) {
        console.log('Data submitted successfully to mongo db');
      } else {
        throw new Error('Failed to create');
      }
    } catch (error) {
      console.log('Error submitting data:', error);
      console.log(error);
    }

    // dispatch(cartActions.removeAllProducts());
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
    setEnteredPhoneNumber('');
    setEnteredPhoneNumberIsTouched(false);
    setEnteredAddress('');
    setEnteredAddressTouched(false);
    setEnteredCity('');
    setEnteredCityTouched(false);
    setEnteredZipCode('');
    setEnteredZipCodeTouched(false);
    setEnteredCountry('');
    setEnteredCountryTouched(false);
    setEnteredCardNo('');
    setEnteredCardNoTouched(false);
    setEnteredCvv('');
    setEnteredCvvTouched(false);
    setEnteredCardHolderName('');
    setEnteredCardHolderNameTouched(false);
    setOrderDetailModal(true);
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
  const addressInputClasses =
    !enteredAddressIsValid && enteredAddressTouched
      ? `${styles.formGroup} ${styles.formGroupInvalid}`
      : styles.formGroup;
  const cityInputClasses =
    !enteredCityIsValid && enteredCityTouched
      ? `${styles.formGroup} ${styles.formGroupInvalid}`
      : styles.formGroup;
  const zipCodeInputClasses =
    !enteredZipCodeIsValid && enteredZipCodeTouched
      ? `${styles.formGroup} ${styles.formGroupInvalid}`
      : styles.formGroup;
  const countryInputClasses =
    !enteredCountryIsValid && enteredCountryTouched
      ? `${styles.formGroup} ${styles.formGroupInvalid}`
      : styles.formGroup;
  const cardNoInputClasses =
    paymentMethod === 'emoney' && !enteredCardNoIsValid && enteredCardNoTouched
      ? `${styles.formGroup} ${styles.formGroupInvalid}`
      : styles.formGroup;
  const cvvInputClasses =
    paymentMethod === 'emoney' && !enteredCvvIsValid && enteredCvvTouched
      ? `${styles.formGroup} ${styles.formGroupInvalid}`
      : styles.formGroup;
  const cardHolderNameInputClasses =
    paymentMethod === 'emoney' &&
    !enteredCardHolderNameIsValid &&
    enteredCardHolderNameTouched
      ? `${styles.formGroup} ${styles.formGroupInvalid}`
      : styles.formGroup;

  return (
    <>
      {orderDetailModal && formIsValid && (
        <OderDetailModalComponent
          modalHandler={setOrderDetailModal}
          orderDetailModal={orderDetailModal}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.back_link}>
          <Link href="/" className={styles.link} onClick={handleGoBack}>
            Go Back
          </Link>
        </div>
        <div className={styles.wrapper_form}>
          <form
            method="post"
            className={styles.checkoutForm}
            onSubmit={formSubmitHandler}
          >
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
                  name="username"
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
                  name="email"
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
                  name="mobile_no"
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
              <div className={addressInputClasses}>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  onChange={addressInputChangeHandler}
                  onBlur={addressInputBlurHandler}
                  value={enteredAddress}
                  required
                  className={addressInputClasses}
                  name="address"
                />
                {enteredAddressIsInvalid && (
                  <p className={styles.errorText}>Address must not be empty.</p>
                )}
              </div>
              <div className={cityInputClasses}>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  onChange={cityInputChangeHandler}
                  onBlur={cityInputBlurHandler}
                  value={enteredCity}
                  required
                  className={cityInputClasses}
                  name="city"
                />
                {enteredCityIsInvalid && (
                  <p className={styles.errorText}>City must not be empty.</p>
                )}
              </div>
              <div className={zipCodeInputClasses}>
                <label htmlFor="zip">Pin Code:</label>
                <input
                  type="text"
                  id="zip"
                  placeholder="Enter your Pin code"
                  onChange={zipCodeInputChangeHandler}
                  onBlur={zipCodeInputBlurHandler}
                  value={enteredZipCode}
                  required
                  className={zipCodeInputClasses}
                  name="zip_code"
                />
                {enteredZipCodeIsInvalid && (
                  <p className={styles.errorText}>Pin code must not be empty</p>
                )}
              </div>
              <div className={countryInputClasses}>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter your country"
                  onChange={countryInputChangeHandler}
                  onBlur={countryInputBlurHandler}
                  value={enteredCountry}
                  required
                  className={countryInputClasses}
                  name="country"
                />
                {enteredCountryIsInvalid && (
                  <p className={styles.errorText}>Country must not be empty.</p>
                )}
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
                    name="cod"
                  />
                  <label htmlFor="cash">Cash on Delivery</label>
                  <input
                    type="radio"
                    id="emoney"
                    value="emoney"
                    checked={paymentMethod === 'emoney'}
                    onChange={handlePaymentMethodChange}
                    name="emoney"
                  />
                  <label htmlFor="emoney">E-Money</label>
                </div>
                {paymentMethod === 'emoney' && (
                  <div className={styles.emoneyDetails}>
                    <div className={cardNoInputClasses}>
                      <label htmlFor="cardno">Enter Card No:</label>
                      <input
                        type="text"
                        id="cardno"
                        placeholder="Enter your card number"
                        onChange={cardNoInputChangeHandler}
                        onBlur={cardNoInputBlurHandler}
                        value={enteredCardNo}
                        name="card_no"
                      />
                      {enteredCardNoIsInvalid && (
                        <p className={styles.errorText}>
                          Enter any dummy value
                        </p>
                      )}
                    </div>
                    <div className={cvvInputClasses}>
                      <label htmlFor="cvv">CVV:</label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="Enter the CVV"
                        onChange={cvvInputChangeHandler}
                        onBlur={cvvInputBlurHandler}
                        value={enteredCvv}
                        name="cvv"
                      />
                      {enteredCvvIsInvalid && (
                        <p className={styles.errorText}>
                          Enter any dummy value
                        </p>
                      )}
                    </div>
                    <div className={cardHolderNameInputClasses}>
                      <label htmlFor="cardHolderName">
                        Card Holder's Name:
                      </label>
                      <input
                        type="text"
                        id="cardHolderName"
                        placeholder="Enter the card holder's name"
                        onChange={cardHolderNameInputChangeHandler}
                        onBlur={cardHolderNameInputBlurHandler}
                        value={enteredCardHolderName}
                        name="cardHolderName"
                      />
                      {enteredCardHolderNameIsInvalid && (
                        <p className={styles.errorText}>
                          Enter any dummy value
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
          <Summary onSubmit={formSubmitHandler} />
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

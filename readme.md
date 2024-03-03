# Telephone Package

## Overview

The Telephone Package is a simple JavaScript implementation of a telephone system that allows adding, removing, and dialing phone numbers. It follows the observer pattern to notify observers whenever a phone number is dialed.

## Usage


1. **Initialize Telephone**

    ```javascript
     const telephone = new Telephone();


2. **Add Observers**

    ```javascript
    const observer1 = new PhoneNumberObserver();
    const observer2 = new CustomObserver();
  
    telephone.addObserver(observer1);
    telephone.addObserver(observer2);

3. **Add and Remove Phone Numbers**

    ```javascript
    telephone.addPhoneNumber("1234567890");
    telephone.addPhoneNumber("2345678901");
  
    telephone.removePhoneNumber("1234567890");

4. **Dial Phone Number**
    ```javascript
    telephone.dialPhoneNumber("2345678901");

## Telephone Methods

- **addObserver(observer):** Add an observer to be notified when a phone number is dialed.

- **removeObserver(observer):** Remove an observer from the notification list.

- **notifyObservers(phoneNumber):** Notify all registered observers about the dialed phone number.

- **addPhoneNumber(phoneNumber):** Add a new phone number to the list.

- **removePhoneNumber(phoneNumber):** Remove a phone number from the list.

- **dialPhoneNumber(phoneNumber):** Dial a phone number and notify observers.

## Observer Classes

### PhoneNumberObserver

- **notify(phoneNumber):** Method called when notified. Prints the dialed phone number.

### CustomObserver

- **notify(phoneNumber):** Method called when notified. Prints a custom message "Now Dialing" followed by the phone number.

class Telephone {
  constructor() {
      this.phoneNumbers = new Set();
      this.observers = [];
  }

  // Method to add an observer
  addObserver(observer) {
      this.observers.push(observer);
  }

  // Method to remove an observer
  removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Method to notify all observers
  notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer.notify(phoneNumber));
  }

  // Method to add a phone number
  addPhoneNumber(phoneNumber) {
      this.phoneNumbers.add(phoneNumber);
  }

  // Method to remove a phone number
  removePhoneNumber(phoneNumber) {
      this.phoneNumbers.delete(phoneNumber);
  }

  // Method to dial a phone number
  dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
          console.log(`Dialing ${phoneNumber}`);
          this.notifyObservers(phoneNumber);
      } else {
          console.log("Phone number not found in the list.");
      }
  }
}

class PhoneNumberObserver {
  // Method to be called when notified
  notify(phoneNumber) {
      console.log(`Phone number dialed: ${phoneNumber}`);
  }
}

class CustomObserver {
  // Method to be called when notified
  notify(phoneNumber) {
      console.log(`Now Dialing ${phoneNumber}`);
  }
}


const telephone = new Telephone();

const observer1 = new PhoneNumberObserver();
const observer2 = new CustomObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2345678901");

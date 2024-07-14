class BankAccount {
    #accountNumber;
    #balance;
 
    constructor() {
      this.#accountNumber = this.generateAccountNumber();
      this.#balance = 0;
    }
 
    generateAccountNumber() {
      // Generate a random account number logic (for simplicity, using a fixed number here)
      // Write Code here ========
      return Math.random()
    }
 
    deposit(amount) {
        // Write Code here ========
        this.#balance=this.#balance+amount
        return this.#balance
    }
 
    withdraw(amount) {
        // Write Code here ========  
        if(this.#balance>=amount){
            this.#balance=this.#balance-amount
            return amount
        }
        else{
            return "Insufficient funds"
        }
    }
  }

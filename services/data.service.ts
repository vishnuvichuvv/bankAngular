import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser = ''
  currentacno = ''
  username=''


  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0, transation: [] },
    1001: { acno: 1001, username: "amal", password: 123, balance: 0, transation: [] },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0, transation: [] },
    1003: { acno: 1003, username: "mega", password: 123, balance: 0, transation: [] }
  }
  constructor() { }

  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails

    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username: uname, password: psw, balance: 0, transation: [] }
      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        //acnumber
        this.currentacno = acno
        // store username
        this.username=this.userDetails[acno]["username"]
        return true

      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }





  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amnt
        userDetails[acno]['transation'].push({ type: 'Credit', amount: amnt })
        return userDetails[acno]["balance"]
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }


  withdraw(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)

    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        if (amnt <= userDetails[acno]["balance"]) {
          userDetails[acno]["balance"] -= amnt
          userDetails[acno]['transation'].push({ type: 'Debit', amount: amnt })
          return userDetails[acno]['balance']

        }
        else {
          alert(`insufficent balance and the current balance is ${userDetails[acno]["balance"]}`)
        }
      }
      else {
        alert('incorrect password')
        return false
      }

    }
    else {
      alert('incorrect account number')
      return false
    }

  }

  gettransaction(acno: any) {
    return this.userDetails[acno]['transation']
  }


}
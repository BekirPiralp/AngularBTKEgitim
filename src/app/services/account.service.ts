import { Injectable } from '@angular/core';

@Injectable() 
export class AccountService {

  private _isLogin:boolean=false;
  public get isLogin() : boolean {
    return this._isLogin
  }
  public set isLogin(value:boolean){
    this._isLogin=value
    if(this._isLogin){
      localStorage.setItem("isLogin",String(this.isLogin));
    }else{
      localStorage.removeItem("isLogin");
    }
  }
  
  constructor() { }
  login(user:User):boolean{
    this.isLogin=false

    if(user.userName == "test" && user.password == "12345"){
      this.isLogin = true
      
      return true;
    }
    return false;
  }

  out(){
    this.isLogin = false
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(){

    //return "http://localhost:8000"
    return "http://servertest.sytes.net/andeanwide/public"
  }

  getClientId(){
    return "2"
  }

  getClientSecret(){
    //return "P2RMCwn4nfwfwqAjEBf3tWzvo7AI8mSHRXKW0agh"
    return "xYVQu0kD5iAjctHiiq4R3egxbZE1wmuWse3KpQcm"
  }

}

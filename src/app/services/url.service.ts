import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(){

    //return "http://localhost:8000"
    return "http://servertest.sytes.net/andeanwide/public"
    //return "https://andeanwide.com" //production
  }

  getClientId(){
    //return "3" //production
    return "4"
  }

  getClientSecret(){
    //return "9wg6W8ZHxpmVboy9kY0xUzbNNhee4HKLfkZULlWl" //producction
    return "ILviasCUD5lJFaZzdTFWPsxZvcu8TtunUqnibh3f"
  }

}

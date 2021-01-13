import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(){

    //return "http://localhost:8000"
    //return "http://servertest.sytes.net/andeanwide/public"
    return "https://andeanwide.com" //production
  }

  getClientId(){
    return "3" //production
    //return "6"
  }

  getClientSecret(){
    return "9wg6W8ZHxpmVboy9kY0xUzbNNhee4HKLfkZULlWl" //producction
    //return "RUBGFXqCtz79u3Jg15wUBAvZgegvFwbjzgrnagbr"
  }

}

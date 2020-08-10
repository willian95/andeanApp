import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(){

    return "http://localhost:8000"

  }

  getClientId(){
    return "1"
  }

  getClientSecret(){
    return "gfFiGTZmy5BsCNI1bYTU1BzBQjkw6WnU0Xr7ujAR"
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];

  
  log(msg: string){
    this.messages.push(msg);
  }

  clear(){
    this.messages = [];
  }
}

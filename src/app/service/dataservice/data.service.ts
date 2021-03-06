import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(true);
  currentMessage = this.messageSource.asObservable();

  private message = new BehaviorSubject(false);
  sidenavMessage = this.message.asObservable();

  private labelmessage = new BehaviorSubject('');
  getlabelmessage = this.labelmessage.asObservable();
  constructor() { }

  changeMessage(message: any) {
    console.log("data service", message);
    this.messageSource.next(message)
  }

  sidenavChangeMessage(message: any) {
    console.log('sidnave', message);
    this.message.next(message);

  }

  labelMessage(message: any) {
    console.log("data in service label", message);
    this.labelmessage.next(message)

  }


}

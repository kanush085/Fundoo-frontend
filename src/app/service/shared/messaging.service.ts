import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging,private http:HttpService) {


    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }



  /**
 * update token in firebase database
 * 
 * @param userId userId as a key 
 * @param token token as a value
 */
  updateToken(token) {
    // we can change this function to request our backend service
const body={ 
  "userId":localStorage.getItem('userid'),
  "firebasetoken": token
 }

return this.http.postJSON('pushNotification',body);
  }



  /**
 * request permission for notification from firebase cloud messaging
 * 
 * @param userId userId
 */
  requestPermission(userId) {
    this.angularFireMessaging.deleteToken
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
         this.updateToken( token).subscribe(data=>{
           console.log(data);
           
         },err=>{
           console.log(err);
           
         })
        // localStorage.setItem('firebasetoken', token)
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
    * hook method when new notification received in foreground
    */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
}

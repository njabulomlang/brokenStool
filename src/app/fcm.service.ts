import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token;
  messaging = firebase.messaging();
  constructor(public fun : firebase.functions.Functions) { 
   /*  try {
      const _messaging = firebase.messaging();
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    } catch(e) {

    } */
  }
 /*  async makeToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });
    toast.present();
  } */
  getPermission() {
    /* Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        this.messaging.getToken().then((currentToken) => {
          if (currentToken) {
            //sendTokenToServer(currentToken);
            console.log(currentToken);
            this.fun.httpsCallable('subscribeToTopic')({topic, token:currentToken})
            //updateUIForPushEnabled(currentToken);
          } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
            //updateUIForPushPermissionRequired();
            //setTokenSentToServer(false);
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
         // showToken('Error retrieving Instance ID token. ', err);
          //setTokenSentToServer(false);
        });
      } else {
        console.log('Unable to get permission to notify.');
      }
    }); */
  }
  
 /*  showMessages(): Observable<any> {
    return this.afMessaging.messages.pipe(
      tap(msg => {
        const body: any = (msg as any).notification.body;
        this.makeToast(body);
      })
    );
  }
  sub(topic) {
    this.fun
      .httpsCallable('subscribeToTopic')({ topic, token: this.token })
      .pipe(tap(_ => this.makeToast(`subscribed to ${topic}`)))
      .subscribe();
  }
  
  unsub(topic) {
    this.fun
      .httpsCallable('unsubscribeFromTopic')({ topic, token: this.token })
      .pipe(tap(_ => this.makeToast(`unsubscribed from ${topic}`)))
      .subscribe();
  } */
}

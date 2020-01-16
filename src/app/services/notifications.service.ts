import { Injectable } from '@angular/core';
// import { fi } from 'firebase/app';
// import '@firebase/messaging';
import * as firebase from 'firebase/app'
import { firebaseConfig } from '../firebaseConfig';
@Injectable({
    providedIn: 'root'
})
export class NotificationsService {

    constructor() {


    }
    init(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            navigator.serviceWorker.ready.then((registration) => {
                // Don't crash an error if messaging not supported
                if (!firebase.messaging.isSupported()) {
                    resolve();
                    return;
                }

                const messaging = firebase.messaging();

                // Register the Service Worker
                messaging.useServiceWorker(registration);

                // Initialize your VAPI key
                messaging.usePublicVapidKey(
                    firebaseConfig.vapidKey
                );

                // Optional and not covered in the article
                // Listen to messages when your app is in the foreground
                messaging.onMessage((payload) => {
                    console.log(payload);
                });
                // Optional and not covered in the article
                // Handle token refresh
                messaging.onTokenRefresh(() => {
                    messaging.getToken().then(
                        (refreshedToken: string) => {
                            console.log(refreshedToken);
                        }).catch((err) => {
                            console.error(err);
                        });
                });

                resolve();
            }, (err) => {
                reject(err);
            });
        });
    }
    requestPermission(): Promise<void> {
        console.log('hello 1');

        return new Promise<void>(async (resolve) => {
            console.log('hello 2');
            if (!Notification) {
                console.log('hello 3');
                resolve();
                return;
            }
            if (!firebase.messaging.isSupported()) {
                console.log('hello 4');
                resolve();
                return;
            }
            try {
                console.log('hello 5');
                const messaging = firebase.messaging();
                await messaging.requestPermission();
                console.log('hello 6');
                const token: string = await messaging.getToken();



                console.log('User notifications token:', token);
            } catch (err) {
                console.log('error 303 ', err.message);
                
                // No notifications granted
            }

            resolve();
        });
    }
}

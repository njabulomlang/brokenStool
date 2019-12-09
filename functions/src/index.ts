//import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

//exports.msg = firebase.messaging().getToken()
// export const createAccount = functions.firestore.document('sales/{docid}').onCreate((change: any, context:any) => {
//   console.log('Document change', change.data());
//   // const email = change.get('email');
//   // const password = change.get('pwd'); 
// })
export const subscribeToTopic = functions.https.onCall(
  async (data, context) => {
    await admin.messaging().subscribeToTopic(data.token, data.topic);
    return `subscribed to ${data.topic}`;
  }
);

export const unsubscribeFromTopic = functions.https.onCall(
  async (data, context) => {
    await admin.messaging().unsubscribeFromTopic(data.token, data.topic);

    return `unsubscribed from ${data.topic}`;
  }
);

export const sendOnFirestoreCreate = functions.firestore
  .document('discounts/{discountId}')
  .onCreate(async snapshot => {
    //const discount = snapshot.data();

    const notification: admin.messaging.Notification = {
      title: 'New Discount Available!',
      body: 'This is nice...'
    };

    const payload: admin.messaging.Message = {
      notification,
      topic: 'discounts'
    };

    return admin.messaging().send(payload);
  });

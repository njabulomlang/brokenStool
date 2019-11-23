const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.createAccount = functions.firestore.document('sales/{docid}').onCreate((change: any, context:any) => {
  console.log('Document change', change.data(), 'Document context', context);
  // const email = change.get('email');
  // const password = change.get('pwd'); 
})

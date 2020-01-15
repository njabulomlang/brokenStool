const functions = require('firebase-functions')
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createAccount = functions.firestore.document('CMS_users/{docid}').onCreate((snap: { data: () => any; }, context: any) => {
  console.log('Document change', snap.data());
  const dataR = snap.data();

  const email = dataR.email
  const password = dataR.password
  // let password = change.get('password');
  console.log('email is', email);
  admin.auth().createUser({
      email: email,
      password: password
  })
})
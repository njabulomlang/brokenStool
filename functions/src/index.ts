const functions = require('firebase-functions')
const admin = require('firebase-admin');

const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'njabulocelamandla@gmail.com',
      pass: '123Njabulo*'
  }
});
exports.orderCreated = functions.firestore.document('Order/{docid}').onCreate((snap: { data: () => any; }, context: any) => {
  console.log('Document change', snap.data());
  const mailOptions = {
    from: 'Broken Stool <njabulocelamandla@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
    to: 'njabulomlang96@gmail.com',
    subject: 'Order recieved', // email subject
    html: `<p style="font-size: 16px;">Good day</b></p>
        <br />
        <p style="font-size: 15px;">Thank you for placing order </p>` // email content in HTML
};
  return transporter.sendMail(mailOptions)
})
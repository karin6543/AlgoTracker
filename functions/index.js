const functions = require("firebase-functions");
const admin = require('firebase-admin')

const app = admin.initializeApp()
const firestore = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getUser = functions.https.onRequest(async(request, response) => {
    user = request.query.uid
    
    snapshot = await firestore.collection('tracker').get()
    snapshot.forEach(doc=>{
        console.log(doc.data().date)
    })
    response.send(snapshot);
  });
  
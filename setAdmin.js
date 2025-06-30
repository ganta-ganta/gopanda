const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json"))
});

const email = "gopandacars@gmail.com";

admin.auth().getUserByEmail(email)
  .then(user => {
    return admin.auth().setCustomUserClaims(user.uid, { admin: true });
  })
  .then(() => {
    console.log(`✅ Admin role granted to ${email}`);
  })
  .catch(error => {
    console.error("❌ Error assigning admin role:", error);
  });

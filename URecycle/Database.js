import firestore from "@react-native-firebase/firestore";

export async function checkUser(user, password) {

    // Read the document for user 'Ada Lovelace':
    const documentSnapshot = await firestore()
        .collection('users')
        .doc(user)
        .get();

    console.log('Username', documentSnapshot.data().username);
    console.log('Password', documentSnapshot.data().password);

    return documentSnapshot.data().username === user && documentSnapshot.data().password === password;

}

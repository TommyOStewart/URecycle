import firestore from "@react-native-firebase/firestore";

// import {addNewUser} from "Path/To/Database.js";
// let added = await addNewUser('newUser', 'password1'); (boolean)
export async function addNewUser(user, password) {

    const documentSnapshot = await firestore()
        .collection('users')
        .doc(user)
        .get();

    if (documentSnapshot.exists === true) {
        return false;
    }

    await firestore()
        .collection('users').doc(user).set({username: user, password: password, points: 0});

    return true;
}

// import {checkUser} from "Path/To/Database.js";
// let correctCombo = await checkUser('admin', 'pass');
export async function checkUser(user, password) {

    console.log("Checking User");

    const documentSnapshot = await firestore()
        .collection('users').doc(user).get();

    console.log(documentSnapshot.data());

    if (documentSnapshot.exists === false) {
        return false;
    }

    console.log(documentSnapshot.data().username);
    console.log(documentSnapshot.data().password);

    return documentSnapshot.data().username === user && documentSnapshot.data().password === password;

}

// import {getPoints} from "Path/To/Database.js";
// let points = await getPoints('admin');
export async function getPoints(user) {

    const documentSnapshot = await firestore()
        .collection('users').doc(user).get();

    return documentSnapshot.data().points;

}

// import {setPoints} from "Path/To/Database.js";
// let newPoints = await setPoints('admin', 100);
export async function setPoints(user, amt) {

    const documentSnapshot = await firestore()
        .collection('users').doc(user).set({points: amt});

    return documentSnapshot.data().points;

}


// import {checkRecyclable} from "Path/To/Database.js";
// let isRecyclable = await checkRecyclable('0025000058011');
export async function checkRecyclable(barcode) {

    const documentSnapshot = await firestore()
        .collection('recyclables').doc(barcode).get();

    if (documentSnapshot.exists === false) {
        return false;
    }

    return documentSnapshot.data().recyclable === true;
}

// import {addRecyclable} from "Path/To/Database.js";
// let added = await addRecyclable('0025000058011', 'Lemonade', true);
export async function addRecyclable(barcode, name, isRecyclable) {

    const documentSnapshot = await firestore()
        .collection('recyclables').doc(barcode).get();

    if (documentSnapshot.exists === true) {
        return false;
    }

    await firestore()
        .collection('recyclables').doc(barcode).set({name: name, recyclable: isRecyclable});

    return true;
}

// import {setIsRecyclable} from "Path/To/Database.js";
// let set = await setIsRecyclable('0025000058011', false);
export async function setIsRecyclable(barcode, isRecyclable) {

    const documentSnapshot = await firestore()
        .collection('recyclables').doc(barcode).get();

    if (documentSnapshot.exists === false) {
        return false;
    }

    await firestore()
        .collection('recyclables').doc(barcode).set({recyclable: isRecyclable});

    return true;
}


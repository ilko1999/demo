import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
    try{
        console.log(firestore);
        return firestore
        .collection('users')
        .doc(uid)
        .set({uid, ...data}, { merge: true })

    }catch(e){
        console.log(e);
    }

}

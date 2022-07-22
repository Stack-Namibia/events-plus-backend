/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2022-07-22 09:36:06
 * @modify date 2022-07-22 09:36:06
 * @desc [description]
 */
import firebaseAdmin from 'firebase-admin';
import config from '@/config';

export const initializeFirebaseApp = () => {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(config.fbCredentials),
    });
  } catch (error) {
    console.log('firebase initialize', error);
  }
};

export class FirebaseService {
  decode(token: string) {
    return firebaseAdmin.auth().verifyIdToken(token);
  }
}

export default new FirebaseService();

/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2022-07-22 09:36:06
 * @modify date 2022-07-22 09:36:06
 * @desc [description]
 */
import firebaseAdmin from 'firebase-admin';
import config from '@/config';

export const initializeFirebaseApp = (): void => {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(config.fbCredentials),
    });
    console.log('firebase admin sdk initialized succesfully');
  } catch (error) {
    console.log('firebase initialize', error);
  }
};

export class FirebaseService {
  decode(token: string): Promise<any> {
    return firebaseAdmin.auth().verifyIdToken(token);
  }
}

export default new FirebaseService();

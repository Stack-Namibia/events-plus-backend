export interface RegisterUserPost {
  token: string;
  user: User;
}

export interface User {
  _id?: string;
  /**
   * Users date of birth
   */
  date_of_birth: string;
  /**
   * Users email
   */
  email: string;
  firebaseToken?: string;
  /**
   * Users firstname
   */
  first_name: string;
  /**
   * Users gender
   */
  gender: Gender;
  /**
   * Users lastname
   */
  last_name: string;
  /**
   * Users mobile number
   */
  mobile: string;
  /**
   * Users profile picture url
   */
  profilePic?: string;
  id: any;
}

/**
 * Users gender
 */
export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other',
}

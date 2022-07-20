export interface UserPost {
  /**
   * Users date of birth
   */
  date_of_birth: string;
  /**
   * Users email
   */
  email: string;
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
}

/**
 * Users gender
 */
export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other',
}

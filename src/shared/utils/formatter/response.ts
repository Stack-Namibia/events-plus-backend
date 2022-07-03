/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2022-07-03 10:46:47
 * @modify date 2022-07-03 10:46:47
 * @desc [description]
 */

import { Document } from 'mongoose';

export function formatDocument<T extends Document>(item: T): any {
  return item.toJSON() as any;
}

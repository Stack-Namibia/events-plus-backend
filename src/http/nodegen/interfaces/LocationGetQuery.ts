export interface LocationGetQuery {
  /**
   * Limit the number of items returned
   */
  limit?: number;
  /**
   * Run a match query in the fields of the items, only specific fields are allowed Date
   * values should be in the ISO format, i.e. `2017-01-01` or `2017-01-01T22:00:00`
   */
  match?: string;
  /**
   * The number of items to skip
   */
  skip?: number;
  /**
   * Sort the items on the specified field and order. i.e. name=1 to sort items in ascending
   * order based on their name.
   */
  sort?: string;
}

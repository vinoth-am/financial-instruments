/**
 *
 * @param {*} string
 * @returns Capitalize first character and return
 */

export const capitalizeFirst = (string) => {
  return string?.charAt(0).toUpperCase() + string?.substring(1);
};

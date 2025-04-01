/**
 * Generates a random number within the given range.
 *
 * @param {number} size - The upper limit (exclusive) for the random number.
 * @returns {number} A random number between 0 and size - 1.
 */
export const generateRandomNumber = (size: number): number => {
  return Math.floor(Math.random() * size);
};

/**
 * Generates a random string of lowercase letters.
 *
 * @param {number} size - The length of the generated string.
 * @returns {string} A random string of the specified length.
 */
export const generateRandomString = (size: number): string => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substring(0, size);
};

/**
 * Generates a random email address.
 *
 * @returns {string} A randomly generated email in the format `test+<randomString>+<randomNumber>@gmail.com`.
 */
export const generateRandomEmail = (): string => {
  return `test+${generateRandomString(5)}+${generateRandomNumber(100000)}@gmail.com`;
};

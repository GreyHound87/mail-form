export const required = (value) => (value ? undefined : 'Required');

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const validateEmail = (value) => (emailPattern.test(value) ? undefined : 'Invalid email address');

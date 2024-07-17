export const required = (value) => (value ? undefined : 'Please specify information');

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const validateEmail = (value) => (emailPattern.test(value) ? undefined : 'Please enter a valid email address');

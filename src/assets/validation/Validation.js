import React from 'react';
import * as yup from 'yup';
export const LoginSchema = yup.object().shape({
  Email: yup
    .string()
    .required('Required!')
    .email('Not a valid E-mail')
    .min(4)
    .trim(),
  Password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
export const SignUpSchema = yup.object().shape({
  FullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Required'),
  Email: yup
    .string()
    .required('Required!')
    .email('Not a valid E-mail')
    .min(4)
    .trim(),
  Password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Required'),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref('Password'), null], 'Passwords do not match')
    .required('Required'),
});

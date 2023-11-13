import * as Yup from 'yup';

export const ContactFormSchema = Yup.object({
  name: Yup.string().min(2).max(30).required('Please Enter Your Name'),
  email: Yup.string().email().required('Please Enter Your Email'),
  message: Yup.string().min(2).max(5000).required('Please Enter Your Message'),
});

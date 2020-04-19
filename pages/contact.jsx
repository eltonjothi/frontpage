import '../styles/style.scss';
import React from 'react';
import Layout from '../components/template/Layout';
import Main from '../components/contact/Main';

function Contact() {
  return (
    <Layout classProp="contact">
      <Main />
    </Layout>
  );
}

export default Contact;

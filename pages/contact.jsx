import '../styles/style.scss';
import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/template/Layout';
import Main from '../components/contact/Main';

function Contact({ isDark, toggleTheme }) {
  const title = 'Contact | Elton Jothi';
  const desc =
    'Experienced, Passionate, well-rounded frontend engineer with full stack capabilities and an eye for design.';
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        canonical="https://eltu.in/contact"
        openGraph={{
          type: 'website',
          url: 'https://eltu.in/contact',
          title,
          description: desc,
          images: [
            {
              url: 'https://eltu.in/images/elton-avatar-3.jpg',
              width: 800,
              height: 600,
              alt: 'Elton Jothi',
            },
          ],
        }}
      />
      <Layout classProp="contact" toggleTheme={toggleTheme}>
        <Main />
      </Layout>
    </>
  );
}

export default Contact;

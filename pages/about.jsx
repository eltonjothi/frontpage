import '../styles/style.scss';
import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/template/Layout';
import Main from '../components/resume/Main';

function Resume() {
  const title = 'About | Elton Jothi';
  const desc =
    'Experienced, Passionate, well-rounded frontend engineer with full stack capabilities and an eye for design.';
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        canonical="https://eltu.in/about"
        openGraph={{
          type: 'website',
          url: 'https://eltu.in/about',
          title,
          description: desc,
          images: [
            {
              url: 'https://eltu.in/images/elton-avatar-4.jpg',
              width: 800,
              height: 600,
              alt: 'Elton Jothi',
            },
          ],
        }}
      />
      <Layout classProp="resume">
        <Main />
      </Layout>
    </>
  );
}

export default Resume;

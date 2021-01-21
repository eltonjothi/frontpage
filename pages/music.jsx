// import '../styles/style.scss';
import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/template/Layout';
import Main from '../components/about/Main';
import Tracks from '../components/about/Tracks';

function Music({topTracks}) {
  const title = 'Home | Elton Jothi';
  const desc =
    'Experienced, Passionate, well-rounded frontend engineer with full stack capabilities and an eye for design.';
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        canonical="https://eltu.in/"
        openGraph={{
          type: 'website',
          url: 'https://eltu.in/',
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
      <Layout classProp="home">
        <Tracks topTracks={topTracks} />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/top-tracks`)
  const topTracks = await res.json()

  if (!topTracks) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      topTracks,
    },
  }
}

export default Music;

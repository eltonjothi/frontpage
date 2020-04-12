import '../styles/style.scss';
import React from 'react';
import Layout from '../components/template/Layout';
import Main from '../components/about/Main';

function HomePage() {
  return (
    <Layout classProp="home">
      <Main />
    </Layout>
  );
}

export default HomePage;

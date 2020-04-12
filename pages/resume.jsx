import '../styles/style.scss';
import React from 'react';
import Layout from '../components/template/Layout';
import Main from '../components/resume/Main';

function Resume() {
  return (
    <Layout classProp="resume">
      <Main />
    </Layout>
  );
}

export default Resume;

import React from 'react';

// eslint-disable-next-line import/no-cycle
import Layout from './Layout';

function AboutUs() {
  return (
    <Layout>
      <p data-testid="about-us">About Us</p>
    </Layout>
  );
}

export default AboutUs;

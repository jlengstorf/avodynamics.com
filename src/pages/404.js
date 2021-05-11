import React from 'react';
import { Layout, SEO } from 'components/common';

const p404 = () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... 🙇‍♀️</p>
  </Layout>
);

export default p404;

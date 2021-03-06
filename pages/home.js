import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <img src="/static/panda.jpg" width="200" alt=""/>
    <h1>Hello Wolrd</h1>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
);

export default withAnalytics()(Home);

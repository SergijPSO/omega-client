import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name='Omega' content='OMEGA News' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Work+Sans:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Layout;

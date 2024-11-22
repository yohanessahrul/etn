import Head from "next/head";

interface HeadType {
  title: string;
  description: string;
}

const HeadHtml = ({ title, description }: HeadType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadHtml;

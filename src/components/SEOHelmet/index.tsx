import Head from 'next/head';

interface SEOHelmetProps {
  seoTitle: string;
  desc: string;
}

const SEOHelmet = ({ seoTitle, desc }: SEOHelmetProps) => {
  return (
    <Head>
      <title>GOL | {seoTitle} </title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="광주소프트웨어마이스터고등학교,리그오브레전드,랭킹"
      />
      <meta name="author" content="sionsijun" />
      <meta name="description" content={desc} />

      <meta name="og:title" content="GSM Of Legend" />
      <meta name="og:site_name" content="GSM Of Legend" />
      <meta name="og:description" content={desc} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="사이트주소" />
      <meta property="og:image" content="사이트주소/thumbnail.png" />

      <meta name="twitter:title" content="GSM Of Legned" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="사이트주소" />
      <meta name="twitter:creator" content="sionsijun" />
      <meta name="twitter:image" content="사이트주소/thumbnail.png" />
    </Head>
  );
};

export default SEOHelmet;

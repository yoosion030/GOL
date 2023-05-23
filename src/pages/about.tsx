import type { NextPage } from 'next';
import { About, SEOHelmet } from 'components';

const AboutPage: NextPage = () => {
  return (
    <>
      <SEOHelmet
        seoTitle="프로젝트 소개"
        desc="GOL에 대한 소개와 기타 문의 내용을 설명합니다."
      />
      <About />
    </>
  );
};

export default AboutPage;

import { PageLayout } from 'components';
import { useEffect } from 'react';
import SearchBanner from './SearchBanner';
import Slide from './Slide';

const Search = () => {
  useEffect(() => {
    console.log('slide api 받아오기')
  }, [])
  return (
    <>
      <SearchBanner />
      <PageLayout>
        <Slide />
      </PageLayout>
    </>
  );
};

export default Search;

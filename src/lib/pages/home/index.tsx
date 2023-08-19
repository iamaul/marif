import type { NextPage } from 'next';

import Article from '@/lib/components/screens/Article';
import Banner from '@/lib/components/screens/Banner';
import Topics from '@/lib/components/screens/topic';

const Home: NextPage = () => {
  return (
    <div className="pb-0 w-full flex flex-col">
      <Banner />
      <Article />
      <Topics />
    </div>
  );
};

export default Home;

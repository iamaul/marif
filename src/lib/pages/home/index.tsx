import type { NextPage } from 'next';

import Banner from '@/lib/components/samples/Banner';
import BrowseTopics from '@/lib/components/samples/Browse';
import PrayerTime from '@/lib/components/samples/PrayerTime';

const Home: NextPage = () => {
  return (
    <div className="pb-0 w-full flex flex-col">
      <Banner />
      <PrayerTime />
      <BrowseTopics />
    </div>
  );
};

export default Home;

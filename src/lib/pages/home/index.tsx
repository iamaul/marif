import type { NextPage } from 'next';

import BrowseTopics from '@/lib/components/samples/Browse';
// import CTASection from '@/lib/components/samples/CTASection';
import PrayerTime from '@/lib/components/samples/PrayerTime';
// import SomeText from '@/lib/components/samples/SomeText';

const Home: NextPage = () => {
  return (
    <div className="children:px-1 py-4">
      {/* <SomeText />
      <CTASection /> */}
      <PrayerTime />
      <BrowseTopics />
    </div>
  );
};

export default Home;

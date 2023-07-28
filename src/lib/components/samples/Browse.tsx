import TopicCard from '@/lib/components/samples/TopicCard';

interface Topic {
  title: string;
  image: string;
}

const topics: Topic[] = [
  { title: 'Akhlak', image: 'assets/akhlak.webp' },
  { title: 'Akidah', image: 'assets/akidah.webp' },
  { title: 'Fikih', image: 'assets/fikih.webp' },
  { title: 'Hadis', image: 'assets/hadis.webp' },
  { title: 'Sejarah', image: 'assets/sejarah.webp' },
  { title: 'Keuangan', image: 'assets/keuangan.webp' },
  { title: 'Sekolah Sunnah', image: 'assets/sekolah-sunnah.webp' },
  { title: 'Haji / Umroh', image: 'assets/haji-umroh.webp' },
];

const BrowseTopics = () => {
  return (
    <div className="wrapper">
      <header className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold">Referensi</h2>
      </header>
      <p className="text-xs sm:text-sm mb-4 line-clamp-3 leading-6">
        Temukan referensi yang kamu butuhkan untuk memperdalam ilmu agama. Kami
        sudah merangkum seluruh referensi di bawah sesuai sunnah.
      </p>
      <div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          {topics.map((topic) => (
            <TopicCard title={topic.title} image={topic.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseTopics;

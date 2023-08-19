import CardTopic from '@/lib/components/screens/topic/CardTopic';

interface Topic {
  title: string;
  image: string;
}

const topics: Topic[] = [
  { title: 'Keuangan', image: 'assets/keuangan.webp' },
  { title: 'Pengembangan Diri', image: 'assets/self-development.webp' },
  { title: 'Gaya Hidup', image: 'assets/lifestyle.webp' },
];

const Topics = () => {
  return (
    <div className="wrapper">
      <header className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold">Referensi</h2>
      </header>
      <p className="text-xs sm:text-sm mb-4 line-clamp-3 leading-6">
        Daftar referensi yang telah kami kurasi berdasarkan kehidupan pemuda
        masa kini.
      </p>
      <div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          {topics.map((topic) => (
            <CardTopic title={topic.title} image={topic.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;

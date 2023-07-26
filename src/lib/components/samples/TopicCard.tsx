'use client';

// import Image from 'next/image';
import { useState, useEffect } from 'react';

import { getColorFromImage } from '@/lib/utils';

interface Props {
  title: string;
  image: string;
}

const TopicCard = (props: Props) => {
  const { image, title } = props;
  const [colors, setColors] = useState<string>('#333');

  useEffect(() => {
    const fetchColors = async () => {
      const backgroundColor = await getColorFromImage(image);
      setColors(backgroundColor);
    };

    fetchColors();

    // Cleanup function to prevent updating state on unmounted component
    return () => {
      // Add any cleanup logic here if needed
    };
  }, [image]);

  return (
    <button
      type="button"
      className="block rounded p-4 px-2 md:px-4 md:aspect-[2/1] md:h-auto h-24 relative overflow-hidden transition-colors"
      style={{
        backgroundColor: colors,
      }}
    >
      <h3 className="font-semibold text-white text-base md:text-2xl w-[calc(100%_-_3.25rem)] md:w-[calc(100%_-_4rem)] wrap-balance">
        {title}
      </h3>
      <img
        className="absolute rounded-lg shadow-xl aspect-square object-cover w-20 md:w-24 rotate-12 -right-4 bottom-0 transition-transform group-hover:-translate-x-4"
        src={image}
        alt={title}
      />
    </button>
  );
};

export default TopicCard;

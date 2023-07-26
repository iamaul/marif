import { type ClassValue, clsx } from 'clsx';
import color from 'color';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

function quantize(colors: RGB[]): RGB {
  const reduced = colors.reduce<RGB>(
    (acc, colour) => {
      acc.r += colour.r;
      acc.g += colour.g;
      acc.b += colour.b;
      return acc;
    },
    { r: 0, g: 0, b: 0 }
  );

  const total = colors.length;

  return {
    r: Math.floor(reduced.r / total),
    g: Math.floor(reduced.g / total),
    b: Math.floor(reduced.b / total),
  };
}

export async function getColorFromImage(src: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx!.drawImage(img, 0, 0);
      const imageData = ctx!.getImageData(0, 0, 128, 128);
      const { data } = imageData;
      const values = [];
      for (let i = 0; i < data.length; i += 4) {
        values.push({
          r: data[i],
          g: data[i + 1],
          b: data[i + 2],
        });
      }

      const baseColor = color(quantize(values));
      const result = baseColor.rotate(-45).darken(0.5).lch();
      const [l, c, h] = result.array();
      resolve(`lch(${l} ${c * 2} ${h})`);
    };
  });
}

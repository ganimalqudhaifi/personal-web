import lqip from 'lqip-modern'
import fs from 'fs'
import path from 'path'
import { Placeholders } from '@/types';

const generatePlaceholders = async () => {
  const imageDirectories = [path.join(__dirname, '../../public'), path.join(__dirname, '../../public/logo')];
  const placeholders: Placeholders = {};

  for (const imageDirectory of imageDirectories) {

    const files = fs.readdirSync(imageDirectory);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const filePath = path.join(imageDirectory, file);

        console.log(`Processing: ${file}`);
        const { metadata } = await lqip(filePath);

        placeholders[file] = {
          width: metadata.width,
          height: metadata.height,
          blurDataURL: metadata.dataURIBase64,
        };
      }
    }
  }

  fs.writeFileSync(
    path.join(__dirname, '../data/placeholders.json'),
    JSON.stringify(placeholders, null, 2)
  );

  console.log('Placeholders generated and saved to placeholders.json');
};

generatePlaceholders();

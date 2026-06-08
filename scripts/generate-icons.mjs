import sharp from 'sharp';
import fs from 'fs';

const inputSvg = './public/icon.svg';
const outputDir = './public/icons';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [192, 512];

sizes.forEach(size => {
  sharp(inputSvg)
    .resize(size, size)
    .png()
    .toFile(`${outputDir}/icon-${size}.png`)
    .then(() => console.log(`Generated icon-${size}.png`))
    .catch(err => console.error(`Error generating ${size}px icon:`, err));
});

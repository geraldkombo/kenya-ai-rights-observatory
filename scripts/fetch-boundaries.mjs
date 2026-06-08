import fs from 'fs';
import https from 'https';

const BOUNDARIES_URL = 'https://raw.githubusercontent.com/mikelmaron/kenya-covid19-map/master/data/counties.geojson';
const OUTPUT_PATH = './public/data/boundaries.geojson';

console.log('Downloading Kenya county boundaries...');

https.get(BOUNDARIES_URL, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const geojson = JSON.parse(data);
      geojson.features = geojson.features.map((feature, index) => {
        feature.properties = {
          county_code: index + 1,
          COUNTY: feature.properties.COUNTY
        };
        return feature;
      });
      
      fs.mkdirSync('./public/data', { recursive: true });
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(geojson));
      console.log('Boundaries saved to', OUTPUT_PATH);
    } catch (e) {
      console.error('Error parsing GeoJSON:', e);
    }
  });
}).on('error', (e) => {
  console.error('Download failed:', e);
});

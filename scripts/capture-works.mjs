// Saca las capturas de los proyectos de la sección Trabajos con Edge/Chrome headless.
// Uso: node scripts/capture-works.mjs  (o pasar nombres: node scripts/capture-works.mjs liever)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public/works');

const SITES = {
  gastronomia: 'https://panchodoto.godreamai.com/',
  inmobiliaria: 'https://crm-demo.godreamai.com/',
  estetica: 'https://excelsia-salud.godreamai.com/',
};

const BROWSERS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

const browser = BROWSERS.find(existsSync);
if (!browser) {
  console.error('No encontré Edge ni Chrome.');
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
const wanted = process.argv.slice(2);
const names = wanted.length ? wanted : Object.keys(SITES);

for (const name of names) {
  const url = SITES[name];
  if (!url) {
    console.error(`Proyecto desconocido: ${name}`);
    continue;
  }
  const file = path.join(OUT, `${name}.png`);
  console.log(`${name} -> ${file}`);
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1440,900',
    '--virtual-time-budget=10000',
    `--screenshot=${file}`,
    url,
  ], { stdio: 'inherit' });
}
console.log('Listo.');

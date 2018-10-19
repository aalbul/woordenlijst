import repo from './repo/a.csv';
import R from 'ramda';
import fs from 'fs';

const fileStream = fs.createWriteStream('./src/repo/contact/book1/chapter11.json');
R.pipe(
    R.map(([dutch, english]) => ({from: dutch, to: english})),
    (graph) => fileStream.write(JSON.stringify(graph))
)(repo);
fileStream.end();
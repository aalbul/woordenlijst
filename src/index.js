import Table from 'tty-table';
import * as R from 'ramda';

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const header = [{
    value: "Word",
    headerColor: "cyan",
    color: "white",
    align: "left",
    paddingLeft: 5,
    width: 30
}, {
    value: "Answer",
    headerColor: "cyan",
    color: "white",
    align: "left",
    paddingLeft: 5,
    width: 30
}, {
    value: "Tries",
    headerColor: "cyan",
    color: "white",
    align: "left",
    paddingLeft: 5,
    width: 30
}];

const footer = [];

const conf = {
    borderStyle: 1,
    borderColor: "blue",
    paddingBottom: 0,
    headerAlign: "center",
    align: "center",
    color: "white",
    truncate: "..."
};

const data = [
    {question: "begrijpen", answer: "understand"},
    {question: "vragen", answer: "ask"},
    {question: "sturen", answer: "send"}
];

const requestForKey = (question) => {
    if (question) {
        console.log(question)
    }
    return new Promise((resolve) => {
        process.stdin.once('data', function (key) {
            console.log(key.toString('ascii'));
            resolve(key.toString('ascii'));
        });
    });
};

const showTable = (word, answer, tries) => {
    console.clear();
    const rows = [{
        Word: word,
        Answer: answer,
        Tries: tries
    }];
    console.log(Table(header, rows, footer, conf).render());
};

const appLoop = async (words) => {
    while (!R.isEmpty(words)) {
        const word = words.shift();
        showTable(word.question, "", 1);
        await requestForKey("Ready? Press any key.");
        showTable(word.question, word.answer, 1);
        const response = await requestForKey("Did you know an answer? n/Y");
        if (response === 'n') {
            words.push(word);
        }
    }
};

appLoop(data).then(() => process.exit(0));
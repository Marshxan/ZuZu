const fs = require('fs');
const https = require('https');

let alwaysCheck = [
    { path: '.gitignore', type: 'file' },
    { path: 'package.json', type: 'file' },
    { path: 'package-lock.json', type: 'file' },
]

module.exports = () => {
    let todo = [];

    for (const a of alwaysCheck) {
        todo.push(a);
    }

    const options = {
        hostname: 'api.github.com',
        path: '/repos/btmc-bot/btmc/contents/src',
        method: 'GET',
        headers: {
            'User-Agent': 'btmc-bot',
        }
    }

    const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const finalData = JSON.parse(data);

            for (const file of finalData) {
                todo.push(file);
                run();
            }
        })
    }).end();

    async function run() {
        while (todo.length > 0) {
            const file = todo.shift();

            if (file.type == 'dir') {
                const options = {
                    hostname: 'api.github.com',
                    path: '/repos/btmc-bot/btmc/contents/' + file.path,
                    method: 'GET',
                    headers: {
                        'User-Agent': 'btmc-bot',
                    }
                }

                _res = await makeReq(options);
                res = JSON.parse(_res);

                const path = './' + file.path;
                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path, { recursive: true });
                }

                for (const subFile of res) {
                    todo.push(subFile);
                }
            }

            if (file.type == 'file') {
                const options = {
                    hostname: 'raw.githubusercontent.com',
                    path: '/btmc-bot/btmc/main/' + file.path,
                    method: 'GET',
                    headers: {
                        'User-Agent': 'btmc-bot',
                    }
                }

                const res = await makeReq(options);

                const path = './' + file.path;

                fs.writeFileSync(path, res);
            }
        }
    }

    function makeReq(options) {
        return new Promise(reso => {
            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    reso(data);
                })
            }).end();
        })
    }
}
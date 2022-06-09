setInterval(() => {
    require('./update')();
    delete require.cache[require.resolve('./update')];

    console.log('UPDATED FILES');
}, 1800000)

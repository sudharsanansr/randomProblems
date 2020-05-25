function getTeams(year, k) {
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
    var pages = 0;
    const https = require('https');
    https.get(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${k}`, (res) => {

    res.on('data', (d) => {
        pages = JSON.parse(d)['total_pages'];
        console.log(pages);
        if(pages > 0){
            for(var i = 1; i < pages; i++){
                https.get(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${i}`, (res) => {
                    res.on('data', (d) => {
                        process.stdout.write(d);
                    });
                })
            }
        }
    });

    }).on('error', (e) => {
        console.error(e);
    });

    
}

getTeams(2015, 4);
var bgs = [
'#c0eaf6',
'#ffffb2',
'#b2d8b2',
'#ffe4b2',
'#ffb4b4',
'#800020',
'#9bb7d4',
'#ffcda0',
'#adc7dc',
'#c00000',
'#ff4500',
'#ffdb4b',
'#40b33f',
'#2e8cea',
'#ff814b'
];

fetch('https://raw.githubusercontent.com/chousemath/TIPS_oracle/master/overview_aj.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(res) {
        console.log(res);
        var ctxAJFuels = document.getElementById('ajFuels');
        var chartAJFuels  = new Chart(ctxAJFuels , {
            type: 'doughnut',
            data: { datasets:[{data: res.fuels.data, backgroundColor: bgs}], labels: res.fuels.labels }
        });

        var ctxAJCategories = document.getElementById('ajCategories');
        var chartAJCategories  = new Chart(ctxAJCategories , {
            type: 'doughnut',
            data: { datasets:[{data: res.categories.data, backgroundColor: bgs}], labels: res.categories.labels }
        });

        var ctxAJTransmissions = document.getElementById('ajTransmissions');
        var chartAJTransmissions  = new Chart(ctxAJTransmissions , {
            type: 'doughnut',
            data: { datasets:[{data: res.transmissions.data, backgroundColor: bgs}], labels: res.transmissions.labels }
        });

        var ctxAJColors = document.getElementById('ajColors');
        var chartAJColors  = new Chart(ctxAJColors , {
            type: 'doughnut',
            data: { datasets:[{data: res.colors.data, backgroundColor: bgs}], labels: res.colors.labels }
        });

        var ctxAJTitles = document.getElementById('ajTitles');
        var chartAJTitles  = new Chart(ctxAJTitles , {
            type: 'horizontalBar',
            data: { datasets:[{data: res.titles.data.slice(0, 50), backgroundColor: bgs}], labels: res.titles.labels.slice(0, 50) }
        });
    });

fetch('https://raw.githubusercontent.com/chousemath/TIPS_oracle/master/overview_encar.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(res) {
        console.log(res);
        var ctxEncarFuels = document.getElementById('encarFuels');
        var chartEncarFuels  = new Chart(ctxEncarFuels , {
            type: 'doughnut',
            data: { datasets:[{data: res.fuels.data, backgroundColor: bgs}], labels: res.fuels.labels }
        });

        var ctxEncarTransmissions = document.getElementById('encarTransmissions');
        var chartEncarTransmissions  = new Chart(ctxEncarTransmissions , {
            type: 'doughnut',
            data: { datasets:[{data: res.transmissions.data, backgroundColor: bgs}], labels: res.transmissions.labels }
        });

        var ctxEncarColors = document.getElementById('encarColors');
        var chartEncarColors  = new Chart(ctxEncarColors , {
            type: 'doughnut',
            data: {
                datasets:[{data: res.colors.data.slice(0, 10), backgroundColor: bgs}],
                labels: res.colors.labels.slice(0, 10)
            }
        });

        var ctxEncarTitles = document.getElementById('encarTitles');
        var chartEncarTitles  = new Chart(ctxEncarTitles , {
            type: 'horizontalBar',
            data: { datasets:[{data: res.titles.data.slice(0, 50), backgroundColor: bgs}], labels: res.titles.labels.slice(0, 50) }
        });
    });

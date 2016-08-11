$(document).ready(function() {
 	var map = new AMap.Map('container', {
        // resizeEnable: true
        zoom: 10,
        center: [125.35, 43.88]
    });

    map.on('moveend', getCity);
    function getCity() {
        map.getCity(function(data) {
            if (data['province'] && typeof data['province'] === 'string') {
                document.getElementById('info').innerHTML = '城市：' + (data['city'] || data['province']);
            }
        });
    }
});
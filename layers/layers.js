var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.407000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Flaechen_1 = new ol.format.GeoJSON();
var features_Flaechen_1 = format_Flaechen_1.readFeatures(json_Flaechen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flaechen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flaechen_1.addFeatures(features_Flaechen_1);
var lyr_Flaechen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flaechen_1, 
                style: style_Flaechen_1,
                popuplayertitle: 'Flaechen',
                interactive: false,
    title: 'Flaechen<br />\
    <img src="styles/legend/Flaechen_1_0.png" /> Gewässer<br />\
    <img src="styles/legend/Flaechen_1_1.png" /> Sonstige Flächen<br />\
    <img src="styles/legend/Flaechen_1_2.png" /> Waldflächen<br />\
    <img src="styles/legend/Flaechen_1_3.png" /> Gebäude<br />' });
var format_Linien_2 = new ol.format.GeoJSON();
var features_Linien_2 = format_Linien_2.readFeatures(json_Linien_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linien_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linien_2.addFeatures(features_Linien_2);
var lyr_Linien_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linien_2, 
                style: style_Linien_2,
                popuplayertitle: 'Linien',
                interactive: false,
    title: 'Linien<br />\
    <img src="styles/legend/Linien_2_0.png" /> Hauptweg<br />\
    <img src="styles/legend/Linien_2_1.png" /> Nebenweg<br />\
    <img src="styles/legend/Linien_2_2.png" /> <br />' });
var format_Punkte_3 = new ol.format.GeoJSON();
var features_Punkte_3 = format_Punkte_3.readFeatures(json_Punkte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punkte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punkte_3.addFeatures(features_Punkte_3);
var lyr_Punkte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punkte_3, 
                style: style_Punkte_3,
                popuplayertitle: 'Punkte',
                interactive: true,
    title: 'Punkte<br />\
    <img src="styles/legend/Punkte_3_0.png" /> A<br />\
    <img src="styles/legend/Punkte_3_1.png" /> B<br />\
    <img src="styles/legend/Punkte_3_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Flaechen_1.setVisible(true);lyr_Linien_2.setVisible(true);lyr_Punkte_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Flaechen_1,lyr_Linien_2,lyr_Punkte_3];
lyr_Flaechen_1.set('fieldAliases', {'fid': 'fid', 'Typ': 'Typ', });
lyr_Linien_2.set('fieldAliases', {'fid': 'fid', 'Typ': 'Typ', 'Name': 'Name', });
lyr_Punkte_3.set('fieldAliases', {'fid': 'fid', 'Station': 'Station', 'Erläuterung': 'Erläuterung', });
lyr_Flaechen_1.set('fieldImages', {'fid': 'TextEdit', 'Typ': 'TextEdit', });
lyr_Linien_2.set('fieldImages', {'fid': 'TextEdit', 'Typ': 'TextEdit', 'Name': 'TextEdit', });
lyr_Punkte_3.set('fieldImages', {'fid': 'TextEdit', 'Station': 'TextEdit', 'Erläuterung': 'TextEdit', });
lyr_Flaechen_1.set('fieldLabels', {'fid': 'no label', 'Typ': 'no label', });
lyr_Linien_2.set('fieldLabels', {'fid': 'no label', 'Typ': 'no label', 'Name': 'no label', });
lyr_Punkte_3.set('fieldLabels', {'fid': 'no label', 'Station': 'no label', 'Erläuterung': 'no label', });
lyr_Punkte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
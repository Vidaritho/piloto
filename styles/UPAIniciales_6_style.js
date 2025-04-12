var size = 0;
var placement = 'point';
function categories_UPAIniciales_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ESTABLECIMIENTO':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}), fill: new ol.style.Fill({color: 'rgba(242,126,54,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PRODUCTOR':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}), fill: new ol.style.Fill({color: 'rgba(126,226,92,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UPAIniciales_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("prod_estab");
    var labelFont = "7.800000000000001px \'Lucida Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.4499999999999997;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("n_completo") !== null && resolution > 0 && resolution < 3) {
        labelText = String(feature.get("n_completo"));
    }
    
    var style = categories_UPAIniciales_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ClasificacinLACAHUARCA_1 = new ol.format.GeoJSON();
var features_ClasificacinLACAHUARCA_1 = format_ClasificacinLACAHUARCA_1.readFeatures(json_ClasificacinLACAHUARCA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinLACAHUARCA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinLACAHUARCA_1.addFeatures(features_ClasificacinLACAHUARCA_1);
var lyr_ClasificacinLACAHUARCA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinLACAHUARCA_1, 
                style: style_ClasificacinLACAHUARCA_1,
                popuplayertitle: 'Clasificación LACAHUARCA',
                interactive: false,
    title: 'Clasificación LACAHUARCA<br />\
    <img src="styles/legend/ClasificacinLACAHUARCA_1_0.png" /> 1 - VEGETACIÓN DENSA<br />\
    <img src="styles/legend/ClasificacinLACAHUARCA_1_1.png" /> 2 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinLACAHUARCA_1_2.png" /> 3 - CAMINO / RIO<br />\
    <img src="styles/legend/ClasificacinLACAHUARCA_1_3.png" /> 4 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinLACAHUARCA_1_4.png" /> 5 - AREA PRODUCTIVA / PASTIZALES<br />\
    <img src="styles/legend/ClasificacinLACAHUARCA_1_5.png" /> 6 - VEGETACIÓN ARBOREA<br />' });
var format_ClasificacinTHULAWHINTO_2 = new ol.format.GeoJSON();
var features_ClasificacinTHULAWHINTO_2 = format_ClasificacinTHULAWHINTO_2.readFeatures(json_ClasificacinTHULAWHINTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinTHULAWHINTO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinTHULAWHINTO_2.addFeatures(features_ClasificacinTHULAWHINTO_2);
var lyr_ClasificacinTHULAWHINTO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinTHULAWHINTO_2, 
                style: style_ClasificacinTHULAWHINTO_2,
                popuplayertitle: 'Clasificación THULAWHINTO',
                interactive: false,
    title: 'Clasificación THULAWHINTO<br />\
    <img src="styles/legend/ClasificacinTHULAWHINTO_2_0.png" /> 1 - AGUA/SOMBRA/SIN DATO<br />\
    <img src="styles/legend/ClasificacinTHULAWHINTO_2_1.png" /> 2 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinTHULAWHINTO_2_2.png" /> 3 - BOFEDAL<br />\
    <img src="styles/legend/ClasificacinTHULAWHINTO_2_3.png" /> 4 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinTHULAWHINTO_2_4.png" /> 5 - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinTHULAWHINTO_2_5.png" /> 6 - PASTIZAL NATURAL<br />\
    <img src="styles/legend/ClasificacinTHULAWHINTO_2_6.png" /> 7 - SIN DATO<br />' });
var format_PerimetroABA_3 = new ol.format.GeoJSON();
var features_PerimetroABA_3 = format_PerimetroABA_3.readFeatures(json_PerimetroABA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_3.addFeatures(features_PerimetroABA_3);
var lyr_PerimetroABA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_3, 
                style: style_PerimetroABA_3,
                popuplayertitle: 'Perimetro ABA',
                interactive: false,
                title: '<img src="styles/legend/PerimetroABA_3.png" /> Perimetro ABA'
            });
var format_Municipios_4 = new ol.format.GeoJSON();
var features_Municipios_4 = format_Municipios_4.readFeatures(json_Municipios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_4.addFeatures(features_Municipios_4);
var lyr_Municipios_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_4,
maxResolution:168.0267969135718,
 
                style: style_Municipios_4,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_4.png" /> Municipios'
            });
var format_Departamentos_5 = new ol.format.GeoJSON();
var features_Departamentos_5 = format_Departamentos_5.readFeatures(json_Departamentos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_5.addFeatures(features_Departamentos_5);
var lyr_Departamentos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_5, 
                style: style_Departamentos_5,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_5.png" /> Departamentos'
            });
var format_UPAIniciales_6 = new ol.format.GeoJSON();
var features_UPAIniciales_6 = format_UPAIniciales_6.readFeatures(json_UPAIniciales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPAIniciales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPAIniciales_6.addFeatures(features_UPAIniciales_6);
var lyr_UPAIniciales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPAIniciales_6,
maxResolution:14.00223307613098,
 
                style: style_UPAIniciales_6,
                popuplayertitle: 'UPA (Iniciales)',
                interactive: false,
    title: 'UPA (Iniciales)<br />\
    <img src="styles/legend/UPAIniciales_6_0.png" /> ESTABLECIMIENTO<br />\
    <img src="styles/legend/UPAIniciales_6_1.png" /> PRODUCTOR<br />' });
var format_UPAValidadas_7 = new ol.format.GeoJSON();
var features_UPAValidadas_7 = format_UPAValidadas_7.readFeatures(json_UPAValidadas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPAValidadas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPAValidadas_7.addFeatures(features_UPAValidadas_7);
var lyr_UPAValidadas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPAValidadas_7,
maxResolution:14.00223307613098,
 
                style: style_UPAValidadas_7,
                popuplayertitle: 'UPA (Validadas)',
                interactive: false,
    title: 'UPA (Validadas)<br />\
    <img src="styles/legend/UPAValidadas_7_0.png" /> ESTABLECIMIENTO<br />\
    <img src="styles/legend/UPAValidadas_7_1.png" /> PRODUCTOR<br />' });
var format_DistanciaBajo_8 = new ol.format.GeoJSON();
var features_DistanciaBajo_8 = format_DistanciaBajo_8.readFeatures(json_DistanciaBajo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistanciaBajo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanciaBajo_8.addFeatures(features_DistanciaBajo_8);
var lyr_DistanciaBajo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistanciaBajo_8,
maxResolution:14.00223307613098,
 
                style: style_DistanciaBajo_8,
                popuplayertitle: 'Distancia Bajo',
                interactive: false,
                title: '<img src="styles/legend/DistanciaBajo_8.png" /> Distancia Bajo'
            });
var format_DistanciaMedia_9 = new ol.format.GeoJSON();
var features_DistanciaMedia_9 = format_DistanciaMedia_9.readFeatures(json_DistanciaMedia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistanciaMedia_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanciaMedia_9.addFeatures(features_DistanciaMedia_9);
var lyr_DistanciaMedia_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistanciaMedia_9,
maxResolution:14.00223307613098,
 
                style: style_DistanciaMedia_9,
                popuplayertitle: 'Distancia Media',
                interactive: false,
                title: '<img src="styles/legend/DistanciaMedia_9.png" /> Distancia Media'
            });
var format_DistanciaAlta_10 = new ol.format.GeoJSON();
var features_DistanciaAlta_10 = format_DistanciaAlta_10.readFeatures(json_DistanciaAlta_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistanciaAlta_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanciaAlta_10.addFeatures(features_DistanciaAlta_10);
var lyr_DistanciaAlta_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistanciaAlta_10,
maxResolution:14.00223307613098,
 
                style: style_DistanciaAlta_10,
                popuplayertitle: 'Distancia Alta',
                interactive: false,
                title: '<img src="styles/legend/DistanciaAlta_10.png" /> Distancia Alta'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ClasificacinLACAHUARCA_1.setVisible(true);lyr_ClasificacinTHULAWHINTO_2.setVisible(true);lyr_PerimetroABA_3.setVisible(true);lyr_Municipios_4.setVisible(true);lyr_Departamentos_5.setVisible(true);lyr_UPAIniciales_6.setVisible(true);lyr_UPAValidadas_7.setVisible(true);lyr_DistanciaBajo_8.setVisible(true);lyr_DistanciaMedia_9.setVisible(true);lyr_DistanciaAlta_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ClasificacinLACAHUARCA_1,lyr_ClasificacinTHULAWHINTO_2,lyr_PerimetroABA_3,lyr_Municipios_4,lyr_Departamentos_5,lyr_UPAIniciales_6,lyr_UPAValidadas_7,lyr_DistanciaBajo_8,lyr_DistanciaMedia_9,lyr_DistanciaAlta_10];
lyr_ClasificacinLACAHUARCA_1.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinTHULAWHINTO_2.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_PerimetroABA_3.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'id_ciu_com': 'id_ciu_com', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'upa_13': 'upa_13', 'sup13ha': 'sup13ha', 'n_pre_ace': 'n_pre_ace', 'id_com_cpv': 'id_com_cpv', 'id_com_cna': 'id_com_cna', 'id_com_ace': 'id_com_ace', 'reg_censos': 'reg_censos', 'id_com_ca': 'id_com_ca', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'tot_pob_ac': 'tot_pob_ac', 'tot_pob_12': 'tot_pob_12', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'd_co_comk': 'd_co_comk', 'observ': 'observ', });
lyr_Municipios_4.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'c_ut': 'c_ut', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'n°_ley': 'n°_ley', 'fecha_ley': 'fecha_ley', 'zona': 'zona', 'id_ut': 'id_ut', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'c_siot': 'c_siot', 'tioc_aioc': 'tioc_aioc', });
lyr_Departamentos_5.set('fieldAliases', {'departamen': 'departamen', });
lyr_UPAIniciales_6.set('fieldAliases', {'gid': 'gid', 'id_correl': 'id_correl', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'ord_mun': 'ord_mun', 'n_completo': 'n_completo', 'nombre': 'nombre', 'paterno': 'paterno', 'materno': 'materno', 'nomb_org': 'nomb_org', 'nomb_estab': 'nomb_estab', 'ci': 'ci', 'telf': 'telf', 'instit_und': 'instit_und', 'prog_proy': 'prog_proy', 'x': 'x', 'y': 'y', 'lat': 'lat', 'lon': 'lon', 'nom_predio': 'nom_predio', 'rubro': 'rubro', 'sub_rubro': 'sub_rubro', 'runsa': 'runsa', 'runpa': 'runpa', 'reg_sanit': 'reg_sanit', 'certf_inra': 'certf_inra', 'clasf_inra': 'clasf_inra', 'matr_comer': 'matr_comer', 'superficie': 'superficie', 's_activos': 's_activos', 's_pasivos': 's_pasivos', 's_activo_t': 's_activo_t', 's_pasivo_t': 's_pasivo_t', 'id_ra': 'id_ra', 'nro': 'nro', 'fuente': 'fuente', 'cab_sector': 'cab_sector', 'comunidad': 'comunidad', 'porcentaje': 'porcentaje', 'zona': 'zona', 'valido': 'valido', 'latitud': 'latitud', 'longitud': 'longitud', 'clatitinra': 'clatitinra', 'nomb_pj': 'nomb_pj', 'clapersona': 'clapersona', 'cod_ag': 'cod_ag', 'cod_ae': 'cod_ae', 'cod_aba': 'cod_aba', 'ag_unico': 'ag_unico', 'ae_unico': 'ae_unico', 'aba_unico': 'aba_unico', 'grupo_pto': 'grupo_pto', 'tipo_pto': 'tipo_pto', 'obs_reg': 'obs_reg', 'nc_aux': 'nc_aux', 'nro_corr': 'nro_corr', 'corr_ae': 'corr_ae', 'id_prod': 'id_prod', 'empad': 'empad', 'orden_prod': 'orden_prod', 'ubic_ini': 'ubic_ini', 'ncomp_ini': 'ncomp_ini', 'ubic_cmpo': 'ubic_cmpo', 'ncomp_cmpo': 'ncomp_cmpo', 'viv_upa': 'viv_upa', 'est_sispro': 'est_sispro', 'descargado': 'descargado', 'lat_sispro': 'lat_sispro', 'lon_sispro': 'lon_sispro', 'dato_princ': 'dato_princ', 'ubic_princ': 'ubic_princ', 'genero': 'genero', 'id_ubicac': 'id_ubicac', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'idprod_sis': 'idprod_sis', 'nro_upas': 'nro_upas', 'prod_estab': 'prod_estab', 'nom_estab': 'nom_estab', 'desc_rubro': 'desc_rubro', 'bck_codigo': 'bck_codigo', 'actividad': 'actividad', 'dia_empad': 'dia_empad', });
lyr_UPAValidadas_7.set('fieldAliases', {'gid': 'gid', 'id_correl': 'id_correl', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'ord_mun': 'ord_mun', 'n_completo': 'n_completo', 'nombre': 'nombre', 'paterno': 'paterno', 'materno': 'materno', 'nomb_org': 'nomb_org', 'nomb_estab': 'nomb_estab', 'ci': 'ci', 'telf': 'telf', 'instit_und': 'instit_und', 'prog_proy': 'prog_proy', 'x': 'x', 'y': 'y', 'lat': 'lat', 'lon': 'lon', 'nom_predio': 'nom_predio', 'rubro': 'rubro', 'sub_rubro': 'sub_rubro', 'runsa': 'runsa', 'runpa': 'runpa', 'reg_sanit': 'reg_sanit', 'certf_inra': 'certf_inra', 'clasf_inra': 'clasf_inra', 'matr_comer': 'matr_comer', 'superficie': 'superficie', 's_activos': 's_activos', 's_pasivos': 's_pasivos', 's_activo_t': 's_activo_t', 's_pasivo_t': 's_pasivo_t', 'id_ra': 'id_ra', 'nro': 'nro', 'fuente': 'fuente', 'cab_sector': 'cab_sector', 'comunidad': 'comunidad', 'porcentaje': 'porcentaje', 'zona': 'zona', 'valido': 'valido', 'latitud': 'latitud', 'longitud': 'longitud', 'clatitinra': 'clatitinra', 'nomb_pj': 'nomb_pj', 'clapersona': 'clapersona', 'cod_ag': 'cod_ag', 'cod_ae': 'cod_ae', 'cod_aba': 'cod_aba', 'ag_unico': 'ag_unico', 'ae_unico': 'ae_unico', 'aba_unico': 'aba_unico', 'grupo_pto': 'grupo_pto', 'tipo_pto': 'tipo_pto', 'obs_reg': 'obs_reg', 'nc_aux': 'nc_aux', 'nro_corr': 'nro_corr', 'corr_ae': 'corr_ae', 'id_prod': 'id_prod', 'empad': 'empad', 'orden_prod': 'orden_prod', 'ubic_ini': 'ubic_ini', 'ncomp_ini': 'ncomp_ini', 'ubic_cmpo': 'ubic_cmpo', 'ncomp_cmpo': 'ncomp_cmpo', 'viv_upa': 'viv_upa', 'est_sispro': 'est_sispro', 'descargado': 'descargado', 'lat_sispro': 'lat_sispro', 'lon_sispro': 'lon_sispro', 'dato_princ': 'dato_princ', 'ubic_princ': 'ubic_princ', 'genero': 'genero', 'id_ubicac': 'id_ubicac', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'idprod_sis': 'idprod_sis', 'nro_upas': 'nro_upas', 'prod_estab': 'prod_estab', 'nom_estab': 'nom_estab', 'desc_rubro': 'desc_rubro', 'bck_codigo': 'bck_codigo', 'actividad': 'actividad', 'dia_empad': 'dia_empad', });
lyr_DistanciaBajo_8.set('fieldAliases', {'n_completo': 'n_completo', 'distancias': 'distancias', });
lyr_DistanciaMedia_9.set('fieldAliases', {'n_completo': 'n_completo', 'distancias': 'distancias', });
lyr_DistanciaAlta_10.set('fieldAliases', {'n_completo': 'n_completo', 'distancias': 'distancias', });
lyr_ClasificacinLACAHUARCA_1.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinTHULAWHINTO_2.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_PerimetroABA_3.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'id_ciu_com': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'upa_13': 'TextEdit', 'sup13ha': 'TextEdit', 'n_pre_ace': 'TextEdit', 'id_com_cpv': 'TextEdit', 'id_com_cna': 'TextEdit', 'id_com_ace': 'TextEdit', 'reg_censos': 'TextEdit', 'id_com_ca': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'tot_pob_ac': 'TextEdit', 'tot_pob_12': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'd_co_comk': 'TextEdit', 'observ': 'TextEdit', });
lyr_Municipios_4.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'c_ut': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'n°_ley': 'TextEdit', 'fecha_ley': 'DateTime', 'zona': 'TextEdit', 'id_ut': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'c_siot': 'TextEdit', 'tioc_aioc': 'TextEdit', });
lyr_Departamentos_5.set('fieldImages', {'departamen': 'TextEdit', });
lyr_UPAIniciales_6.set('fieldImages', {'gid': 'TextEdit', 'id_correl': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'n_completo': 'TextEdit', 'nombre': 'TextEdit', 'paterno': 'TextEdit', 'materno': 'TextEdit', 'nomb_org': 'TextEdit', 'nomb_estab': 'TextEdit', 'ci': 'TextEdit', 'telf': 'TextEdit', 'instit_und': 'TextEdit', 'prog_proy': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'nom_predio': 'TextEdit', 'rubro': 'TextEdit', 'sub_rubro': 'TextEdit', 'runsa': 'TextEdit', 'runpa': 'TextEdit', 'reg_sanit': 'TextEdit', 'certf_inra': 'TextEdit', 'clasf_inra': 'TextEdit', 'matr_comer': 'TextEdit', 'superficie': 'TextEdit', 's_activos': 'TextEdit', 's_pasivos': 'TextEdit', 's_activo_t': 'TextEdit', 's_pasivo_t': 'TextEdit', 'id_ra': 'TextEdit', 'nro': 'TextEdit', 'fuente': 'TextEdit', 'cab_sector': 'TextEdit', 'comunidad': 'TextEdit', 'porcentaje': 'TextEdit', 'zona': 'TextEdit', 'valido': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'clatitinra': 'TextEdit', 'nomb_pj': 'TextEdit', 'clapersona': 'TextEdit', 'cod_ag': 'TextEdit', 'cod_ae': 'TextEdit', 'cod_aba': 'TextEdit', 'ag_unico': 'TextEdit', 'ae_unico': 'TextEdit', 'aba_unico': 'TextEdit', 'grupo_pto': 'TextEdit', 'tipo_pto': 'TextEdit', 'obs_reg': 'TextEdit', 'nc_aux': 'TextEdit', 'nro_corr': 'TextEdit', 'corr_ae': 'TextEdit', 'id_prod': 'TextEdit', 'empad': 'TextEdit', 'orden_prod': 'TextEdit', 'ubic_ini': 'TextEdit', 'ncomp_ini': 'TextEdit', 'ubic_cmpo': 'TextEdit', 'ncomp_cmpo': 'TextEdit', 'viv_upa': 'TextEdit', 'est_sispro': 'TextEdit', 'descargado': 'TextEdit', 'lat_sispro': 'TextEdit', 'lon_sispro': 'TextEdit', 'dato_princ': 'TextEdit', 'ubic_princ': 'TextEdit', 'genero': 'TextEdit', 'id_ubicac': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'idprod_sis': 'TextEdit', 'nro_upas': 'TextEdit', 'prod_estab': 'TextEdit', 'nom_estab': 'TextEdit', 'desc_rubro': 'TextEdit', 'bck_codigo': 'TextEdit', 'actividad': 'TextEdit', 'dia_empad': 'TextEdit', });
lyr_UPAValidadas_7.set('fieldImages', {'gid': 'TextEdit', 'id_correl': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'n_completo': 'TextEdit', 'nombre': 'TextEdit', 'paterno': 'TextEdit', 'materno': 'TextEdit', 'nomb_org': 'TextEdit', 'nomb_estab': 'TextEdit', 'ci': 'TextEdit', 'telf': 'TextEdit', 'instit_und': 'TextEdit', 'prog_proy': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'nom_predio': 'TextEdit', 'rubro': 'TextEdit', 'sub_rubro': 'TextEdit', 'runsa': 'TextEdit', 'runpa': 'TextEdit', 'reg_sanit': 'TextEdit', 'certf_inra': 'TextEdit', 'clasf_inra': 'TextEdit', 'matr_comer': 'TextEdit', 'superficie': 'TextEdit', 's_activos': 'TextEdit', 's_pasivos': 'TextEdit', 's_activo_t': 'TextEdit', 's_pasivo_t': 'TextEdit', 'id_ra': 'TextEdit', 'nro': 'TextEdit', 'fuente': 'TextEdit', 'cab_sector': 'TextEdit', 'comunidad': 'TextEdit', 'porcentaje': 'TextEdit', 'zona': 'TextEdit', 'valido': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'clatitinra': 'TextEdit', 'nomb_pj': 'TextEdit', 'clapersona': 'TextEdit', 'cod_ag': 'TextEdit', 'cod_ae': 'TextEdit', 'cod_aba': 'TextEdit', 'ag_unico': 'TextEdit', 'ae_unico': 'TextEdit', 'aba_unico': 'TextEdit', 'grupo_pto': 'TextEdit', 'tipo_pto': 'TextEdit', 'obs_reg': 'TextEdit', 'nc_aux': 'TextEdit', 'nro_corr': 'TextEdit', 'corr_ae': 'TextEdit', 'id_prod': 'TextEdit', 'empad': 'TextEdit', 'orden_prod': 'TextEdit', 'ubic_ini': 'TextEdit', 'ncomp_ini': 'TextEdit', 'ubic_cmpo': 'TextEdit', 'ncomp_cmpo': 'TextEdit', 'viv_upa': 'TextEdit', 'est_sispro': 'TextEdit', 'descargado': 'TextEdit', 'lat_sispro': 'TextEdit', 'lon_sispro': 'TextEdit', 'dato_princ': 'TextEdit', 'ubic_princ': 'TextEdit', 'genero': 'TextEdit', 'id_ubicac': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'idprod_sis': 'TextEdit', 'nro_upas': 'TextEdit', 'prod_estab': 'TextEdit', 'nom_estab': 'TextEdit', 'desc_rubro': 'TextEdit', 'bck_codigo': 'TextEdit', 'actividad': 'TextEdit', 'dia_empad': 'TextEdit', });
lyr_DistanciaBajo_8.set('fieldImages', {'n_completo': 'TextEdit', 'distancias': 'TextEdit', });
lyr_DistanciaMedia_9.set('fieldImages', {'n_completo': 'TextEdit', 'distancias': 'TextEdit', });
lyr_DistanciaAlta_10.set('fieldImages', {'n_completo': 'TextEdit', 'distancias': 'TextEdit', });
lyr_ClasificacinLACAHUARCA_1.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinTHULAWHINTO_2.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_PerimetroABA_3.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'id_ciu_com': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'upa_13': 'no label', 'sup13ha': 'no label', 'n_pre_ace': 'no label', 'id_com_cpv': 'no label', 'id_com_cna': 'no label', 'id_com_ace': 'no label', 'reg_censos': 'no label', 'id_com_ca': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'tot_pob_ac': 'no label', 'tot_pob_12': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'd_co_comk': 'no label', 'observ': 'no label', });
lyr_Municipios_4.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'c_ut': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'n°_ley': 'no label', 'fecha_ley': 'no label', 'zona': 'no label', 'id_ut': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'c_siot': 'no label', 'tioc_aioc': 'no label', });
lyr_Departamentos_5.set('fieldLabels', {'departamen': 'no label', });
lyr_UPAIniciales_6.set('fieldLabels', {'gid': 'inline label - always visible', 'id_correl': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'ord_mun': 'no label', 'n_completo': 'no label', 'nombre': 'no label', 'paterno': 'no label', 'materno': 'no label', 'nomb_org': 'no label', 'nomb_estab': 'no label', 'ci': 'no label', 'telf': 'no label', 'instit_und': 'no label', 'prog_proy': 'no label', 'x': 'no label', 'y': 'no label', 'lat': 'no label', 'lon': 'no label', 'nom_predio': 'no label', 'rubro': 'no label', 'sub_rubro': 'no label', 'runsa': 'no label', 'runpa': 'no label', 'reg_sanit': 'no label', 'certf_inra': 'no label', 'clasf_inra': 'no label', 'matr_comer': 'no label', 'superficie': 'no label', 's_activos': 'no label', 's_pasivos': 'no label', 's_activo_t': 'no label', 's_pasivo_t': 'no label', 'id_ra': 'no label', 'nro': 'no label', 'fuente': 'no label', 'cab_sector': 'no label', 'comunidad': 'no label', 'porcentaje': 'no label', 'zona': 'no label', 'valido': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'clatitinra': 'no label', 'nomb_pj': 'no label', 'clapersona': 'no label', 'cod_ag': 'no label', 'cod_ae': 'no label', 'cod_aba': 'no label', 'ag_unico': 'no label', 'ae_unico': 'no label', 'aba_unico': 'no label', 'grupo_pto': 'no label', 'tipo_pto': 'no label', 'obs_reg': 'no label', 'nc_aux': 'no label', 'nro_corr': 'no label', 'corr_ae': 'no label', 'id_prod': 'no label', 'empad': 'no label', 'orden_prod': 'no label', 'ubic_ini': 'no label', 'ncomp_ini': 'no label', 'ubic_cmpo': 'no label', 'ncomp_cmpo': 'no label', 'viv_upa': 'no label', 'est_sispro': 'no label', 'descargado': 'no label', 'lat_sispro': 'no label', 'lon_sispro': 'no label', 'dato_princ': 'no label', 'ubic_princ': 'no label', 'genero': 'no label', 'id_ubicac': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'idprod_sis': 'no label', 'nro_upas': 'no label', 'prod_estab': 'no label', 'nom_estab': 'no label', 'desc_rubro': 'no label', 'bck_codigo': 'no label', 'actividad': 'no label', 'dia_empad': 'no label', });
lyr_UPAValidadas_7.set('fieldLabels', {'gid': 'no label', 'id_correl': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'ord_mun': 'no label', 'n_completo': 'no label', 'nombre': 'no label', 'paterno': 'no label', 'materno': 'no label', 'nomb_org': 'no label', 'nomb_estab': 'no label', 'ci': 'no label', 'telf': 'no label', 'instit_und': 'no label', 'prog_proy': 'no label', 'x': 'no label', 'y': 'no label', 'lat': 'no label', 'lon': 'no label', 'nom_predio': 'no label', 'rubro': 'no label', 'sub_rubro': 'no label', 'runsa': 'no label', 'runpa': 'no label', 'reg_sanit': 'no label', 'certf_inra': 'no label', 'clasf_inra': 'no label', 'matr_comer': 'no label', 'superficie': 'no label', 's_activos': 'no label', 's_pasivos': 'no label', 's_activo_t': 'no label', 's_pasivo_t': 'no label', 'id_ra': 'no label', 'nro': 'no label', 'fuente': 'no label', 'cab_sector': 'no label', 'comunidad': 'no label', 'porcentaje': 'no label', 'zona': 'no label', 'valido': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'clatitinra': 'no label', 'nomb_pj': 'no label', 'clapersona': 'no label', 'cod_ag': 'no label', 'cod_ae': 'no label', 'cod_aba': 'no label', 'ag_unico': 'no label', 'ae_unico': 'no label', 'aba_unico': 'no label', 'grupo_pto': 'no label', 'tipo_pto': 'no label', 'obs_reg': 'no label', 'nc_aux': 'no label', 'nro_corr': 'no label', 'corr_ae': 'no label', 'id_prod': 'no label', 'empad': 'no label', 'orden_prod': 'no label', 'ubic_ini': 'no label', 'ncomp_ini': 'no label', 'ubic_cmpo': 'no label', 'ncomp_cmpo': 'no label', 'viv_upa': 'no label', 'est_sispro': 'no label', 'descargado': 'no label', 'lat_sispro': 'no label', 'lon_sispro': 'no label', 'dato_princ': 'no label', 'ubic_princ': 'no label', 'genero': 'no label', 'id_ubicac': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'idprod_sis': 'no label', 'nro_upas': 'no label', 'prod_estab': 'no label', 'nom_estab': 'no label', 'desc_rubro': 'no label', 'bck_codigo': 'no label', 'actividad': 'no label', 'dia_empad': 'no label', });
lyr_DistanciaBajo_8.set('fieldLabels', {'n_completo': 'no label', 'distancias': 'no label', });
lyr_DistanciaMedia_9.set('fieldLabels', {'n_completo': 'no label', 'distancias': 'no label', });
lyr_DistanciaAlta_10.set('fieldLabels', {'n_completo': 'no label', 'distancias': 'no label', });
lyr_DistanciaAlta_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
require([
      "esri/WebMap",
      "esri/views/MapView",
    ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        const view = new MapView({
          center: [-73.9656, 40.7826],
          zoom: 13,
          map: webmap,
          container: "viewDiv"
        });
        var featureLayer1 = new FeatureLayer({url:"https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_10_14_Poverty_by_Age_Boundaries/FeatureServer"})
        var featureLayer2 = new FeatureLayer({url:"https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Public_Schools/FeatureServer"})

        map.add(featureLayer1);
        map.add(featureLayer2);
    }
);

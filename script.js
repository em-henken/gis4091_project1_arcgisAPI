 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer, Popup) {
            var map = new Map({
            basemap: "hybrid"
            });
            
            var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-73.9656, 40.7826],
            zoom: 12
            });

            var featureLayer1 = new FeatureLayer({  url:"https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/ACS_10_14_Poverty_by_Age_Boundaries/FeatureServer/2"
            })
            var featureLayer2 = new FeatureLayer({    url:"https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Public_Schools/FeatureServer/0",
             popupTemplate: {title: "{place}",
                             content: "{NAME} has enrollment {ENROLLMENT}"}
            })
            
            var countyQuery1 = "County = 'New York County'"; 
            var countyQuery2 = "COUNTY = 'NEW YORK'"; 
            featureLayer1.definitionExpression = countyQuery1;
            featureLayer2.definitionExpression = countyQuery2;
               
            map.add(featureLayer1);
            map.add(featureLayer2);
   
      }
);

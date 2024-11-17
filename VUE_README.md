# Vue
install extension "vue"
https://marketplace.visualstudio.com/items?itemName=Vue.volar

### initial setup
- create project: ```npm create vue@latest```
- change to project and install maplibre: ```
    cd webgis_angular
    npm install maplibre-gl```
    add "node_modules/maplibre-gl/dist/maplibre-gl.css" to angular.json
- serve site: ```ng serve```
- go to http://localhost:4200/

### dev
read https://angular.dev/tutorials/first-app
- adding maplibre:
    - modify angular.json to add "node_modules/maplibre-gl/dist/maplibre-gl.css" to styles i build and test
- add new components: ```ng generate component new-comp```
- add new service: ```ng generate service new-service```

### Deploy
ng build
# maplibre_tempalte
A template for a webgis portal made with maplibre


## angular
install extension "angular language service"
read https://github.com/angular/angular-cli

### initial setup
- install angular: ```npm install -g @angular/cli```
- create project: ```ng new webgis_angular```
- change to project and install maplibre: ```
    cd webgis_angular
    npm install maplibre-gl```
    add maplibre-gl.css to angunlar.json
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
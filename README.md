# maplibre_tempalte
A template for a webgis portal made with maplibre


## angular
install extension "angular language service"
read https://github.com/angular/angular-cli

quick summary:
```npm install -g @angular/cli```
```ng new webgis_angular```
```
cd webgis_angular
ng serve
```
go to http://localhost:4200/
## react
see nextjs documentation https://nextjs.org/learn/dashboard-app/getting-started

```npm install -g pnpm```
Run the following commands, say yes to use src folder.
```
npx create-next-app@latest webgis --use-pnpm
cd webgis
pnpm i
pnpm dev
```
see site: http://localhost:3000/

## vue
read https://vuejs.org/guide/quick-start.html
```npm create vue@latest```
```cd webgis```
```npm install```
```npm install maplibre-gl```
```npm run format```
```npm run dev```

# VS code

Install extension ESLint.
Install eslint configuration for react.
```npm install --save-dev eslint-config-react-app```
Adjust .eslintrc.json
Install Prettier extension to reformat code. Adjust to format when save.

# Browser
Add react developer tools chrome extension.

# Notes
css/tailwind goes in global.css. Be sure the file is imported at layout.tsx.
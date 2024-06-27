# maplibre_react_template
A template for a webgis portal made with maplibre, nextjs and react.
see nextjs documentation https://nextjs.org/learn/dashboard-app/getting-started

# install the package manager 
```npm install -g pnpm```

# Create next.js app
```
npx create-next-app@latest webgis --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
cd webgis
pnpm i
pnpm dev
```
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
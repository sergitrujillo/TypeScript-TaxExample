https://www.digitalocean.com/community/tutorials/typescript-new-project

-How to install typescript version locally
npm init -y

npm i typescript@4.1.6 --save-dev

npx tsc -v

npx tsc --init

npm install eslint --save-dev

You have three options
./node_modules/.bin/eslint --init---linux
node_modules\.bin\eslint --init
npm init @eslint/config

-Versionado Semántico y package-lock.json
https://rubensa.wordpress.com/2019/11/27/pero-que-demonios-es-package-lock-json/

https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code

-Ctrol + shift + p  -- edit settings.json file for LF
 "files.eol": "\n",
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 },
 "eslint.validate": ["javascript","typescript", "typescriptreact"]

- en el fichero package.json, crear el script: "dev": "tsc --watch"

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsc --watch"
  },

-Ejecutarlo en un terminal para que transpile todos los ficheros typescript.
npm run dev
Después sólo tendremos que ejecutar este comando:
node dist/Employee.js

-Instalación
npm install
tsc
node dist/Employee.js


private keywords
https://kendaleiv.com/typescript-constructor-assignment-public-and-private-keywords/

Exercici pla de pensions

Quin pla de pensions vols realitzar?
1.Pla de pensions persona física
2.Pla de pensions empresarial
3.Tots dos

-Quins han sigut els teus ingresos d'aquest any?
-Aportació del pla de pensions de persona física?
-Aportació del pla de pensions empresarial?

https://zellwk.com/blog/publish-to-npm/


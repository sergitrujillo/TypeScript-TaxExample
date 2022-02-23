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

Plan de pensiones 2022
https://www.tuproyectodevida.es/cambios-planes-de-pensiones/

Plan de pensiones persona física, máximo desgravable: 1500
Plan de pensiones empresa, máximo desgravable: 8500

Los tramos para 2022 son:
​Hasta 12.450 euros: 19%
De 12.450 euros hasta 20.200 euros: 24%
De 20.200 euros hasta 35.200 euros: 30%
De 35.200 euros hasta 60.000 euros: 37%
De 60.000 euros hasta 300.000 euros: 45%
De rentas superiores a 300.000 euros: 47%

Exercici pla de pensions

Quin pla de pensions vols realitzar?
1.Pla de pensions persona física
2.Pla de pensions empresarial
3.Tots dos

-Quins han sigut els teus ingresos d'aquest any?
-Aportació del pla de pensions de persona física?
-Aportació del pla de pensions empresarial?

https://zellwk.com/blog/publish-to-npm/


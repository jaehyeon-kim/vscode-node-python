## VSCODE Node Python Setup

### Node

- [How to setup ESLint and Prettier on Node](https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node)

#### Init ESLINT

```sh
npx eslint --init # create .eslintrc.json


? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? CommonJS (require/exports)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
? Would you like to install them now with npm? Yes
```

`.eslintrc.json`

```json
{
  "env": {
    "commonjs": true,
    "es2020": true,
    "node": true
  },
  "extends": ["airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 11
  },
  "rules": {}
}
```

#### Add PRETTIER

```sh
npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Update `.eslintrc.json`

```json
{
  "env": {
    "commonjs": true,
    "es2020": true,
    "node": true
  },
  "extends": ["prettier", "airbnb-base"],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 11
  },
  "rules": { "prettier/prettier": "error" }
}
```

Add `prettier.config.js`

```js
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
};
```

### Python

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'prettier',
    'html'
  ],
  // add your custom rules here
  'rules': {
    // "prettier/prettier": "error",
    "no-new": 0,
    "handle-callback-err": 0,
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "comma-dangle": [1, "never"], // 不对数组或对象末尾逗号做强制要求
    "space-before-function-paren": 0, // function相关空格不做强制要求
    "spaced-comment": [0, "always"], // 不对注释前的空格做强制要求
    "camelcase": [0, {
      properties: "never"
    }],
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-inner-declarations": 0,
    "semi": [0],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

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
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-console": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
  // add your custom rules here
  /*'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 4 : 0,
    'generator-star-spacing': [2, {
      'before': false,
      'after': true
    }],
    'guard-for-in': 0,
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 4, {
      'SwitchCase': 1
    }],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
    'no-multiple-empty-lines': [2, {
      'max': 2
    }], //空行最多不能超过2行
    'eol-last': 0, //文件以单一的换行符结束
  }*/
}

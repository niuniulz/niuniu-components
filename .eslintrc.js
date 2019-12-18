module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'prettier',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁用原因： https://yepbug.com/2018/08/28/what-is-the-benefit-of-prefer-default-export/
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'class-methods-use-this': 0,
    camelcase: 0,
    'no-param-reassign': 0, // 禁用“禁止对函数参数再赋值”规则
    'no-return-await': 0, // 禁用“禁用不必要的 return await”规则
    'no-nested-ternary': 0, // 禁用“禁止使用嵌套的三元表达式”规则
    'prefer-destructuring': ['error', { object: false, array: false }], // enforces only object destructuring, but not array destructuring:
    'consistent-return': 0, // 禁用“要求使用一致的 return 语句” 规则
    'no-useless-escape': 0, // 禁用“禁用不必要的转义”规则
    "comma-dangle": ["error", "never"],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}

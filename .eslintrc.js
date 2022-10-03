module.exports = {
  plugins: [
    'react',
  ],
  extends: [
    '@antfu',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unknown-property': [0, {}],
    'react/react-in-jsx-scope': [0, {}],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-curly-newline': [2, { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'proportional-always', beforeClosing: 'proportional-always' }],
    'react/jsx-wrap-multilines': [2, { declaration: 'parens', assignment: 'parens', return: 'parens', arrow: 'parens', condition: 'parens', logical: 'parens', prop: 'parens' }],
  },
}

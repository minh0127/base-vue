/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [
      'error',
      {
        functions: 'always-multiline',
        objects: 'always-multiline',
        arrays: 'always-multiline',
        imports: 'always-multiline',
      },
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    curly: [2, 'all'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-parens': [2, 'functions'],
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-spaced-func': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2,
    'no-useless-escape': 0,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'always'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
      },
    ],
    'template-curly-spacing': [2, 'never'],
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'vue/multi-word-component-names': ['off', {}],
    'vue/no-mutating-props': ['off', {}],
    'vue/max-attributes-per-line': [
      'off',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    // 'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};

module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'rules': {
    'indent': [2, 'tab', {'VariableDeclarator': 1, 'SwitchCase': 1}],
    'max-len': [2, 120, 2],
    'object-curly-spacing': [2, 'never'],
    'quotes': [2, 'single', {'allowTemplateLiterals': true}],
    'no-tabs': 0,
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
    'require-jsdoc': ['error', {
      'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': true,
          'ClassDeclaration': true,
          'ArrowFunctionExpression': true
      }
    }],
    'valid-jsdoc': ['error', {
      'matchDescription': '',
      'requireReturn': true,
      'requireReturnType': true,
      'requireParamDescription': false,
      'requireReturnDescription': false,
      'prefer': {
        'arg': 'param',
        'argument': 'param',
        'function': 'function',
        'class': 'constructor',
        'return': 'returns',
        'virtual': 'abstract'
      },
      'preferType': {
        'Boolean': 'boolean',
        'Number': 'number',
        'object': 'Object',
        'String': 'string'
      }
    }]
  }
};

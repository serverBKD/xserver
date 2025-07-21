// import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    // plugins: { js },
    // extends: ['js/recommended']
  },
  // {
  //   files: ['**/*.{js,mjs,cjs,ts}'],
  //   languageOptions: { globals: { ...globals.browser, ...globals.node } }
  // },
  // { extends: ['prettier'] },
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_'
        }
      ],
      'no-undef': 'error',
      semi: ['error', 'never'],
      'linebreak-style': 0,
      quotes: ['error', 'single'],
      indent: ['error', 'tab']
    }
  }
])

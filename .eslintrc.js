module.exports = {
    root: true,

    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        '@nuxt/eslint-config',
        '@vue/eslint-config-typescript'
    ],
    plugins: ['vue'],

    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
    },

    rules: {
        // indentを4に
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ObjectExpression: 1,
                flatTernaryExpressions: false,
                ignoredNodes: ['ConditionalExpression *'],
            },
        ],
        // オブジェクトの最後の要素には常にカンマをつける
        'comma-dangle': ['error', 'always-multiline'],
        // 実装のない空の関数は無視する
        '@typescript-eslint/no-empty-function': [0],
        // if,while文などを一行で書く時は波括弧を省略
        curly: ['error', 'multi-or-nest'],
        // シングルクオートに統一、prettierに合わせる
        quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        'arrow-parens': ['error', 'always'],
        // 初期化済みの型変数を禁止しない
        '@typescript-eslint/no-inferrable-types': 0,
        // 不要なカッコは消す
        'no-extra-parens': 0,
        // 無駄なスペースは削除
        'no-multi-spaces': 2,
        // 不要な改行は削除
        'no-multiple-empty-lines': [2, { max: 2 }],
        // 関数とカッコはあけない
        'space-before-function-paren': [0, 'never'],
        // true/falseを無駄に使うな
        'no-unneeded-ternary': 2,
        // varは禁止
        'no-var': 2,
        // コンソールは本番環境ではwarning
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
        // 配列のindexには空白入れるな(hogehoge[ x ])
        'computed-property-spacing': 2,
        // キー
        'key-spacing': 2,
        // キーワードの前後には適切なスペースを
        'keyword-spacing': 2,

        // Vue関連
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-vars': 'error',
        'vue/no-unused-components': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/no-v-html': 'off',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': ['error', {
            order: ['defineProps', 'defineEmits']
        }],
        'vue/html-comment-content-spacing': ['error', 'always'],
        'vue/no-unused-properties': ['error', {
            groups: ['props', 'data', 'computed', 'methods']
        }],
        'vue/no-useless-mustaches': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': 'error',

        // TypeScript関連
        // nullableのメソッドからの返り値をnon nullに強制キャストしない
        '@typescript-eslint/no-non-null-assertion': 0,
        // キャメルケースの使用を容認
        camelcase: 'off',
        // 変数の存在確認はTypeScriptでチェックするため無効化
        'no-undef': 0,
        // 型定義の明示的な記述は必須にしない
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // anyの使用を制限
        '@typescript-eslint/no-explicit-any': 'warn',

        // Nuxt関連
        'vue/no-multiple-template-root': 'off', // Vue 3のComposition APIで複数ルートを許可

        'no-restricted-syntax': [
            // for in, for of, enumは使ってはいけない
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'ForOfStatement',
                message:
                    'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
            {
                selector: 'TSEnumDeclaration',
                message: "Don't declare enums",
            },
        ],
        // Arrow関数を強制
        'prefer-arrow-callback': 'error',
        // constを強制
        'prefer-const': 'error',
    },
    overrides: [
        // 一部ルールを除外する
        {
            files: ['pages/**/*.vue'], // pagesのdefault exportは仕方ないので除外
            rules: { 'import/no-default-export': 'off' },
        },
        {
            files: ['**/*.vue'], // Vueコンポーネントの戻り値の型定義の記述は必須にしない
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
        {
            files: ['**/*.ts'], // TypeScriptファイル
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.vue'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
    globals: {
        // Nuxt関連のグローバル変数
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        defineComponent: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        useRuntimeConfig: 'readonly',
        useNuxtApp: 'readonly',
        navigateTo: 'readonly',
        abortNavigation: 'readonly',
        addRouteMiddleware: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        prefetchComponents: 'readonly',
        preloadRouteComponents: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useServerSeoMeta: 'readonly',
        useLazyFetch: 'readonly',
        useLazyAsyncData: 'readonly',
        useAsyncData: 'readonly',
        useFetch: 'readonly',
        $fetch: 'readonly',
        clearNuxtData: 'readonly',
        refreshNuxtData: 'readonly',
        useCookie: 'readonly',
        useError: 'readonly',
        createError: 'readonly',
        showError: 'readonly',
        clearError: 'readonly',
        isNuxtError: 'readonly',
        useLazyComposable: 'readonly',
        useState: 'readonly',
        clearNuxtState: 'readonly',
        useRequestEvent: 'readonly',
        useRequestHeaders: 'readonly',
        setResponseStatus: 'readonly',
        setPageLayout: 'readonly',
        onNuxtReady: 'readonly',
        useSSR: 'readonly',
        process: 'readonly',
    },
}

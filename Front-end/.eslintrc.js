module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'prettier', 'testing-library', 'jest'],
	globals: {
		process: true,
	},
	settings: {
		react: { version: 'detect' },
	},
	rules: {
		/**
		 * prettier가 적용 되었는지 체크
		 */
		'prettier/prettier': 'warn',
		/**
		 * 짧은 표기법으로 진행하는 형변환은 이해하기 어려울 수 있으므로 코드의 직관성이 떨어져 금지
		 * https://eslint.org/docs/rules/no-implicit-coercion
		 */
		'no-implicit-coercion': 'error',

		/**
		 * no-extra-boolean-cast
		 * !!var, !!!var 등 구분하기 애매한 boolean 형변환을 명확하도록
		 * https://eslint.org/docs/rules/no-extra-boolean-cast
		 */
		'no-extra-boolean-cast': 'off',

		/**
		 * getter-return
		 * 함수의 input output이 어떤지 사이드 이펙트를 측정하기 힘들어지므로,
		 * 아무런 값도 return 하지 않는 함수일경우 경고
		 * https://eslint.org/docs/rules/getter-return
		 */
		'getter-return': 'warn',

		/**
		 * 재할당되지 않는 변수는 const 선언
		 * https://eslint.org/docs/rules/prefer-const
		 */
		'prefer-const': 'error',

		/**
		 * no-var
		 * var 선언 금지
		 * https://eslint.org/docs/rules/no-var
		 */
		'no-var': 'error',

		/**
		 * @typescript-eslint/no-empty-interface
		 * 빈 인터페이스 경고
		 * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
		 */
		'@typescript-eslint/no-empty-interface': 'warn',

		/**
		 * curly
		 * if문 또는 for문에 대한 코드가 하나만 포홤된경우 중괄호를 생략할수 있으나, 버그를 유발하고 코드의 명확성을 떨어트릴 수 있기 때문에 금지
		 * https://eslint.org/docs/rules/curly
		 */
		curly: ['error', 'all'],

		/**
		 * eqeqeq
		 * === 및 !==등 형병환 비교 연산자만 허용, 대신 null은 해당 Rule에 대해서 예외 처리
		 * https://eslint.org/docs/rules/eqeqeq#require-and-eqeqeq
		 */
		eqeqeq: ['error', 'always', { null: 'ignore' }],

		/**
		 * import/no-cycle
		 * 다른 모듈끼리 서로를 import 하는것을 방지
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
		 * */
		'import/no-cycle': ['error', { maxDepth: Infinity }],

		/**
		 * import/no-duplicates
		 * 중복된 import 금지
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		 * */
		'import/no-duplicates': 'error',

		/**
		 * react/display-name
		 * React.memo, React.forwardRef도 막는 경우가 존재하여 해당 Rule은 생산성을 떨어트린다 판단되 off 처리됨
		 * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		 * */
		'react/display-name': 'off',

		/**
		 * react/prop-types
		 * Type선언으로 propTypes를 이미 명명하고 있으므로, off 처리함
		 * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		 */
		'react/prop-types': 'off',
		/**
		 * react-hooks/rules-of-hooks
		 * 내부 코드 컨벤션상 React Hook 으로만 코드를 작성하도록 강제
		 */
		'react-hooks/rules-of-hooks': 'error',

		/**
		 * react-hooks/exhaustive-deps
		 * useCallback, useMemo, useEffect등 Hook에서 사용되는 변수중, 누락된 deps가 있는지 검사
		 */
		'react-hooks/exhaustive-deps': 'error',

		/**
		 * @deprecated - 기존 eslint가 동작하지 않음으로써 생긴 에러가 다소 존재하여 임시로 warn 처리됨. 차후엔 error로 변경 필요
		 * @typescript-eslint/no-explicit-any
		 * any 타입 선언 금지
		 * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
		 */
		'@typescript-eslint/no-explicit-any': 'warn',

		/**
		 * 아직 미개발 사항들이 있는 것 같아서 팀원들 확인이 필요하여 그대로 둠. error 로 변경 필요
		 * tsconfig.json 의 noUnusedLocals, noUnusedParameters 옵션과 동시 변경
		 */
		'@typescript-eslint/no-unused-vars': 'error',

		'@typescript-eslint/no-non-null-assertion': 'error',

		/**
		 * 7.22.0 에 추가된 스펙으로, 일단 모두 추가하여 테스트 중
		 */
		'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true }],
		'react/jsx-no-constructed-context-values': 'error',
		'react/jsx-indent-props': ['error', { indentMode: 'tab', ignoreTernaryOperator: true }],
		'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always', warnOnSpreadAttributes: true }],
	},
	overrides: [
		/**
		 * .js 파일에 대해 require 허용, ES6 module 로 변환하게끔 하지 않음
		 */
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react', 'plugin:jest/recommended', 'plugin:jest/style'],
		},
	],
};

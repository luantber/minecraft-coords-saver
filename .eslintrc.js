module.exports = {
	root: true,

	env: {
		node: true
	},

	parserOptions: {
		parser: "babel-eslint"
	},

	rules: {
		"no-console": "off",
		"no-debugger": "off"
	},

	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"@vue/prettier"
	],

	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)"
			],
			env: {
				jest: true
			}
		}
	]
}

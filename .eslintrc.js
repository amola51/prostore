// .eslintrc.js
module.exports = {
	// ...other config
	overrides: [
    {
      files: ['lib/generated/prisma/**'], // Target only the Prisma generated files
      rules: {
        '@typescript-eslint/no-require-imports': 'off', // Turn off the rule
      },
    },
  ],
};
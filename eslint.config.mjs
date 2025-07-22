import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // --- ADD THIS NEW CONFIGURATION OBJECT FOR GLOBAL IGNORES ---
  {
    ignores: [
      'lib/generated/**', // Ignore the Prisma generated files
      'node_modules/',    // Standard ignore
      '.next/',           // Next.js build output
      'dist/',            // Common build output for other tools
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

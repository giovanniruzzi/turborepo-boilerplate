import typescript from "@rollup/plugin-typescript";
import { preserveDirectives } from "rollup-plugin-preserve-directives";
import analyze from "rollup-plugin-analyzer";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image';
import replace from "@rollup/plugin-replace";
import { cleandir } from "rollup-plugin-cleandir";


/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      exports: "named",
      preserveModules: true,
      interop: "auto",
    },
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime", "next/image"],
  plugins: [
    cleandir(),
    postcss({
      extract: "styles.css",
      minimize: true,
      config: {
        path: './postcss.config.js',
      }
    }),
    replace({
      preventAssignment: true,
      "process.env.MOCK": process.env.NODE_ENV === "production" ? JSON.stringify("enabled") : JSON.stringify("disabled"),
    }),
    typescript({
      exclude: ["**/*config.ts"],
    }),
    image(),
    preserveDirectives(),
    analyze({ hideDeps: true, summaryOnly: true, limit: 0 }),
    terser(),
  ],
  treeshake: "smallest",
  // Ignore warnings when using "use client" directive
  onwarn(warning, warn) {
    if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
      warn(warning);
    }
  },
}));

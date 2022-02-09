import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json')

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
			name: 'react-lib',
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		external(),
		resolve(),
		commonjs(),
		typescript({ tsconfig: './tsconfig.json' }),
		postcss(),
		terser(),
	],
}

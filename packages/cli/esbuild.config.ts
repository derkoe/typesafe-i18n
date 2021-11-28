import { build } from 'esbuild'
import { resolve } from 'path'

const out = await build({
	entryPoints: [resolve('packages/cli/src/cli.ts')],
	outfile: 'cli/typesafe-i18n-2.js',
	bundle: true,
	minify: false,
	banner: { js: '#!/usr/bin/env node\n' },
	platform: 'node',
	format: 'esm',
	external: ['typescript'],
	tsconfig: 'packages/cli/tsconfig.json',
}).catch((e) => {
	// eslint-disable-next-line no-console
	console.error(e)
	process.exit(1)
})

// eslint-disable-next-line no-console
console.info(out)

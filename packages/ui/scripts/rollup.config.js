import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import autoprefixer from 'autoprefixer'
import postcssEnv from 'postcss-preset-env'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

const resolv = p => path.resolve(__dirname, '../', p)

const postcssPlugins = [postcssEnv(), autoprefixer()]

const style = {
  trim: false,
  postcssPlugins,
}

const plugins = [
  // css({ output: resolv('dist/atlaskit-vue.css') }),
  resolve({
    extensions: ['.js', '.json', '.vue', '.scss'],
  }),
  postcss({
    extract: 'dist/atlaskit-vue.css',
    plugins: postcssPlugins,
  }),
  commonjs(),
  vue({
    css: false,
    style,
  }),
  buble({ objectAssign: 'Object.assign' }),
]

export default [
  {
    input: resolv('src/index.js'),
    output: [
      {
        format: 'es',
        file: resolv('dist/atlaskit-vue.es.js'),
      },
      {
        format: 'cjs',
        file: resolv('dist/atlaskit-vue.common.js'),
        exports: 'named',
      },
    ],
    plugins,
  },
  {
    input: resolv('src/index.js'),
    output: {
      format: 'iife',
      file: resolv('dist/atlaskit-vue.iife.js'),
      name: 'atlaskitVue',
      exports: 'named',
    },
    plugins: [
      ...plugins,
      uglify({
        compress: { unused: true, dead_code: true },
      }),
    ],
  },
]

import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import commonjs from 'rollup-plugin-commonjs'
import stylus from 'rollup-plugin-stylus-compiler'
import autoprefixer from 'autoprefixer'
import postcssEnv from 'postcss-preset-env'

const resolv = p => path.resolve(__dirname, '../', p)

const postcssPlugins = [postcssEnv(), autoprefixer()]

const style = {
  trim: false,
  postcssPlugins,
}

const plugins = [
  resolve({
    extensions: ['.js', '.json', '.vue'],
  }),
  commonjs(),
  vue({
    css: false,
    style,
  }),
  stylus(),
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
    plugins: [css({ output: resolv('dist/atlaskit-vue.css') }), ...plugins],
  },
  {
    input: resolv('src/index.js'),
    output: {
      format: 'iife',
      file: resolv('dist/atlaskit-vue.iife.js'),
      name: 'atlaskitVue',
      exports: 'named',
    },
    plugins: [css({ output: false }), ...plugins],
  },
]

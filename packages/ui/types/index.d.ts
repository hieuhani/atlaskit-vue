import Vue from 'vue'

export { AvContainer } from './Container'
export { AvRow } from './Row'
export { AvCol } from './Col'

export class AtlaskitVue {
  static components: any[]
  static install(vue: typeof Vue, options: {}): void
}

export default AtlaskitVue

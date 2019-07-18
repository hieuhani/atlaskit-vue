import { ClassesProviderMixin } from './mixins/components/providers/ClassesProviderMixin'

export declare class AvContainer implements ClassesProviderMixin {
  fluid: boolean

  classes(): Array<{ [p: string]: boolean }>
}

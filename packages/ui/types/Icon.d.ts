import { ClassesProviderMixin } from './mixins/components/providers/ClassesProviderMixin'

export type IconStyle = 'regular' | 'sl'

export declare class AvIcon implements ClassesProviderMixin {
  name: string
  iconStyle?: IconStyle
  color?: string
  bgColor: string

  classes(): Array<{ [p: string]: boolean }>
}

import { IPrimaryMedia } from "./IPrimaryMedia"

export interface IBrand {
  id: number
  name: string
  code: string
  primaryMedia?: IPrimaryMedia | null
}

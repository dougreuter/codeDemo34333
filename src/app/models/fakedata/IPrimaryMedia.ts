import { IClassificationOrValue } from "./IClassificationOrValue"
import { IFile } from "./IFile"

export interface IPrimaryMedia {
  type: string
  url: string
  file: IFile
  classification?: IClassificationOrValue | null
}

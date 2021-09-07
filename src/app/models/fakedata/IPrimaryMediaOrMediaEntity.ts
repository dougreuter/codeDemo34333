import { IFile } from './IFile'
import { IClassificationOrValue1 } from "./IClassificationOrValue1"


export interface IPrimaryMediaOrMediaEntity {
  type: string
  classification: IClassificationOrValue1
  url: string
  file: IFile
}

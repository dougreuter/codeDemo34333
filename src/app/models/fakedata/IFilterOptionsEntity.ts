import { IOptionInstructionsEntity } from "./IOptionInstructionsEntity"
import { ITierOptionsEntity } from "./ITierOptionsEntity"

export interface IFilterOptionsEntity {
  tierName: string
  tierOptions?: (ITierOptionsEntity)[] | null
  optionInstructions?: (IOptionInstructionsEntity)[] | null
}

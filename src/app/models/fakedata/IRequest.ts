import { IPagination } from "./IPagination"

export interface IRequest {
  filterBreakdowns?: (string)[] | null
  pagination: IPagination
  showEsSource: boolean
  queryString: string
}

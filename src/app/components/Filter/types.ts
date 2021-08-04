import { ITableData } from "../Table/types";

export interface IFilterProps {
  source: ITableData[];
  sortBy: (data: ITableData[]) => void;
}

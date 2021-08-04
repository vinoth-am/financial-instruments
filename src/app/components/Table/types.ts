export interface ITableData {
  ticker: string;
  price: number;
  assetClass: string;
}

export interface ITableProps {
  data: ITableData[];
  heading: string;
  sorting: boolean;
  width?: number;
}

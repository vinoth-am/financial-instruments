export interface ITableData {
  ticker: string;
  price: number;
  assetClass: string;
}

export interface ITableProps {
  data: ITableData[];
  heading: string;
  tableHeader: string[];
  sorting: boolean;
  width?: number;
}

export interface IApiService {
  data: any;
}

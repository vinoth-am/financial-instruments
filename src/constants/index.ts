export const INTRUMENTS_RESPONSE_KEY: string[] = [
  "ticker",
  "price",
  "assetClass",
];
export const SORTED_ASSERT_CLASS: string[] = ["Equities", "Macro", "Credit"];

export const INTRUMENTS_FILTER: {
  [key: string]: string;
} = {
  Select: "",
  Ticker: "ticker",
  Price: "price",
  AssetClass: "assetClass",
};

export const TABLE_HEADING = "Financial Instruments Data";
export const SORT_BY = "Sortby";

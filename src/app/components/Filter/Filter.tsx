import React from "react";
import "./filterstyles.css";
import { INTRUMENTS_FILTER, SORTED_ASSERT_CLASS } from "../../../constants";
import { ITableData } from "../Table/types";
import { IFilterProps } from "./types";
/**
 *
 * @param source Unsorted array of objects
 * @returns It returns ticker in alphabetical order.
 */

const sortTicker = (source: ITableData[]) => {
  return source.sort((first: ITableData, second: ITableData) => {
    if (first.ticker > second.ticker) {
      return 1;
    }
    if (first.ticker < second.ticker) {
      return -1;
    }
    return 0;
  });
};

/**
 *
 * @param source Unsorted array of objects
 * @returns Return price in descending order.
 */

const sortPrice = (source: ITableData[]) => {
  return source.sort(
    (first: ITableData, second: ITableData) => second.price - first.price
  );
};

/**
 *
 * @param source Unsorted array of objects
 * @returns It returns sorted array of objects based on input ticker array.
 */

const sortAssetClass = (source: ITableData[]) => {
  return source.sort((first: ITableData, second: ITableData) => {
    return (
      SORTED_ASSERT_CLASS.indexOf(first.assetClass) -
      SORTED_ASSERT_CLASS.indexOf(second.assetClass)
    );
  });
};

const sortData = (
  event: React.ChangeEvent<{ value: string }>,
  source: ITableData[],
  sortBy: (data: ITableData[]) => void
) => {
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case INTRUMENTS_FILTER.Ticker:
      const resultTicker = sortTicker(source);
      sortBy(resultTicker);
      break;

    case INTRUMENTS_FILTER.Price:
      const resultPrice = sortPrice(source);
      sortBy(resultPrice);
      break;

    case INTRUMENTS_FILTER.AssetClass:
      const resultAssetClass = sortAssetClass(source);
      sortBy(resultAssetClass);
      break;
  }
};

export const Filter = (props: IFilterProps) => {
  const { sortBy, source } = props;

  return (
    <select className="filter" onChange={(e) => sortData(e, source, sortBy)}>
      {Object.keys(INTRUMENTS_FILTER).map((key) => {
        return (
          <option key={key} value={INTRUMENTS_FILTER[key]}>
            {key}
          </option>
        );
      })}
    </select>
  );
};

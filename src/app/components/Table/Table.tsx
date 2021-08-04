import React, { useEffect, useState } from "react";
import "./tablestyles.css";
import { Filter } from "../Filter/Filter";
import { capitalizeFirst } from "../../../utils";
import { INTRUMENTS_RESPONSE_KEY, SORT_BY } from "../../../constants";
import { ITableData, ITableProps } from "./types";

export const Table = (props: ITableProps) => {
  const { data, heading, sorting, width } = props;
  const [getData, setData] = useState<ITableData[]>([]);

  const tableWidth = width || 80;

  useEffect(() => {
    setData(data);
  }, [data]);

  const sortBy = (sortedData: ITableData[]) => {
    const newData = [...sortedData];
    setData(newData);
  };

  return (
    /* Table Title section */
    <div
      className="container"
      style={{ width: tableWidth > 100 ? "100%" : `${tableWidth}%` }}
    >
      <div className="header">
        <h3 style={{ paddingLeft: 10 }}>{heading}</h3>
        {sorting && (
          <div className="header-right">
            <h4>{SORT_BY}</h4>
            <Filter source={getData} sortBy={sortBy} />
          </div>
        )}
      </div>

      {/* Table Header section */}
      <table className="instruments-table">
        <tr>
          {INTRUMENTS_RESPONSE_KEY.map((header) => (
            <th>{capitalizeFirst(header)}</th>
          ))}
        </tr>

        {/* Table row section */}
        {getData?.map((value: ITableData, index: number) => (
          <tr
            key={index}
            className={`row-color-${value?.assetClass?.toLowerCase()}`}
          >
            <td>{value.ticker}</td>
            <td className={value?.price < 0 ? "price-red" : "price-blue"}>
              {value.price}
            </td>
            <td>{value?.assetClass}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Table } from "../components/Table/Table";
import { INTRUMENTS_RESPONSE_KEY, TABLE_HEADING } from "../../constants";
import ApiService from "../../services/axios";

export const Home = () => {
  const [getTableData, setTableData] = useState<[]>([]);
  useEffect(() => {
    callService();
  }, []);

  const callService = async () => {
    const service: ApiService = new ApiService();
    const data: [] = await service.get();
    setTableData(data);
  };

  return (
    <Table
      data={getTableData}
      heading={TABLE_HEADING}
      sorting={true}
      tableHeader={INTRUMENTS_RESPONSE_KEY}
      width={80}
    />
  );
};

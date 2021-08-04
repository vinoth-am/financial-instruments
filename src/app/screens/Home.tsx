import React from "react";
import { Table } from "../components/Table/Table";
import response from "../../services";
import { INTRUMENTS_RESPONSE_KEY, TABLE_HEADING } from "../../constants";

export const Home = () => {
  return (
    <Table
      data={response}
      heading={TABLE_HEADING}
      sorting={true}
      tableHeader={INTRUMENTS_RESPONSE_KEY}
      width={80}
    />
  );
};

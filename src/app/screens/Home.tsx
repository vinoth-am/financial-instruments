import React from "react";
import { Table } from "../components/Table/Table";
import response from "../../services";
import { TABLE_HEADING } from "../../constants";

export const Home = () => {
  return (
    <Table data={response} heading={TABLE_HEADING} sorting={true} width={80} />
  );
};

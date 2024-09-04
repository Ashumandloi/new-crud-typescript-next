"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Table, Button, Popconfirm } from "antd";
import { useRouter } from "next/navigation";

const getData = async () => {
  const { data } = await axios.get("http://localhost:3002/students");
  return data;
};

const StudentsTable = () => {
  const router = useRouter();
  const {
    data: students,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["students"],
    queryFn: getData,
  });

  if (isLoading)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  if (isError)
    return (
      <div>
        <h3>Error fetching data {error.message}</h3>
      </div>
    );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Roll No.",
      dataIndex: "roll",
      key: "roll",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <>
          <Button type="primary" style={{ marginRight: 8 }}  onClick={() => router.push("/editdata")}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this student?"
            onConfirm={() => console.log("Deleted", record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div className="data-container">
      <div>
        <Button onClick={() => router.push("/createdata")} style={{margin:"5px 0"}} htmlType="button" type="primary" >Create Data</Button>
      </div>
      <Table
        columns={columns}
        dataSource={students}
        rowKey="id"
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default StudentsTable;

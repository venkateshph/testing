import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import supabase from "../security/pass.js";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

async function upload(
  Name,
  Department,
  Rollno,
  Address,
  Phonenumber,
  Bloodgroup,
  Fathername,
  Mothername,
  Email
) {
  const { data, error } = await supabase.from("Students").insert([
    {
      Name: Name,
      Department: Department,
      Rollno: Rollno,
      Address: Address,
      Phonenumber: Phonenumber,
      Bloodgroup: Bloodgroup,
      Fathername: Fathername,
      Mothername: Mothername,
      Email: Email,
    },
  ]);
}

const Student = () => {
  const [Name, setName] = useState(null);
  const [Department, setDepartment] = useState(null);
  const [Rollno, setRollno] = useState(null);
  const [Address, setAddress] = useState(null);
  const [Phonenumber, setPhonenumber] = useState(null);
  const [Bloodgroup, setBloodgroup] = useState(null);
  const [Fathername, setFathername] = useState(null);
  const [Mothername, setMothername] = useState(null);
  const [Email, setEmail] = useState(null);
  const onFinish = (values) => {
    upload(
      Name,
      Department,
      Rollno,
      Address,
      Phonenumber,
      Bloodgroup,
      Fathername,
      Mothername,
      Email
    );
  };
  return (
    <>
      <div class="d-flex">
        <div class="p-3 flex-sm-fill ">
          <div className="card" style={{ width: "50rem" }}>
            <div className="card-body">
              <h6 class="card-subtitle mb-2 text-body-secondary">
                <marquee direction="right">Students Data Upload : ⬇️</marquee>
              </h6>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "Title",
                    },
                  ]}
                >
                  <Input onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Title",
                    },
                  ]}
                >
                  <Input onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item
                  label="Department"
                  name="Department"
                  rules={[
                    {
                      required: true,
                      message: "Content✍️",
                    },
                  ]}
                >
                  <Input onChange={(e) => setDepartment(e.target.value)} />
                </Form.Item>
                <Form.Item
                  label="Roll no:"
                  name="Roll no"
                  rules={[
                    {
                      required: true,
                      message: "Content✍️",
                    },
                  ]}
                >
                  <Input onChange={(e) => setRollno(e.target.value)} />
                </Form.Item>

                <Form.Item
                  label="Address"
                  name="Address"
                  rules={[
                    {
                      required: true,
                      message: "Content✍️",
                    },
                  ]}
                >
                  <TextArea onChange={(e) => setAddress(e.target.value)} />
                </Form.Item>

                <Form.Item
                  label="Phone number"
                  name="Phone number"
                  rules={[
                    {
                      required: true,
                      message: "Content✍️",
                    },
                  ]}
                >
                  <Input onChange={(e) => setPhonenumber(e.target.value)} />
                </Form.Item>

                <Form.Item
                  label="Blood group:"
                  name="Blood group"
                  rules={[
                    {
                      required: true,
                      message: "Content✍️",
                    },
                  ]}
                >
                  <Input onChange={(e) => setBloodgroup(e.target.value)} />
                </Form.Item>
                <Form.Item
                  label="Father name:"
                  name="Father name"
                  rules={[
                    {
                      required: true,
                      message: "Content✍️",
                    },
                  ]}
                >
                  <Input onChange={(e) => setFathername(e.target.value)} />
                </Form.Item>
                <Form.Item
                  label="Mother name:"
                  name="Mother name"
                  rules={[
                    {
                      required: true,
                      message: "Content✍️",
                    },
                  ]}
                >
                  <Input onChange={(e) => setMothername(e.target.value)} />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 10,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit" id="liveToastBtn">
                    Upload
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;

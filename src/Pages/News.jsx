import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import NewsSection from "./NewsSection";
import { motion } from "framer-motion";
import supabase from "../security/pass";
import TextArea from "antd/es/input/TextArea";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const News = () => {
  const [title, SetTile] = useState("");
  const [content, SetContent] = useState(null);
  const [yes, setYes] = useState(false);

  async function upload() {
    setYes(true);
    const { data, error } = await supabase
      .from("News")
      .insert({ Title: title, News: content });

    setYes(false);

    console.log(error);
  }
  const onFinish = (values) => {
    console.log("Success:", values);
    SetTile(values.Title);
    SetContent(values.Content);
    setYes(true);
    upload();
  };

  return (
    <>
      <motion.div animate={{ y: 30 }} transition={{ delay: 0.2 }}>
        <div class="d-flex">
          <div class="p-3 flex-sm-fill ">
            <div
              className="card"
              style={{
                width: "30rem",
                backgroundColor: "#7978E9",
                color: "white",
              }}
            >
              <div className="card-body" style={{ color: "white" }}>
                <h6 class="card-subtitle mb-2 " style={{ color: "white" }}>
                  <marquee direction="right">Content Section : ⬇️</marquee>
                </h6>
                <div style={{ color: "white" }}>
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
                    
                      label={<label style={{color:"white"}}>Title📄</label>}
                      name="Title"
                      
                      rules={[
                        {
                          required: true,
                          message: "Title",
                        },
                      ]}
                    >
                      <Input
                        style={{
                          border: " 2px solid #4b49ac",
                          backgroundColor: "#7978E9",
                        }}
                        onChange={(e) => SetTile(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      label={<label style={{color:"white"}}>Content✍️</label>}
                      name="Content"
                      rules={[
                        {
                          required: true,
                          message: "Content✍️",
                        },
                      ]}
                      style={{ color: "white" }}
                    >
                      <TextArea
                        style={{
                          
                          border: " 2px solid #4b49ac",
                          backgroundColor: "#7978E9",
                        }}
                        onChange={(e) => SetContent(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      {yes ? (
                        <div class="spinner-grow" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <Button
                          type="primary"
                          htmlType="submit"
                          id="liveToastBtn"

                          style={{border:"none", backgroundColor:"#98bdff"}}
                        >
                          Upload
                        </Button>
                      )}
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <marquee direction="right">Lasted you posted: 🗞️</marquee>
            <NewsSection width="40rem" />
          </div>
        </div>
      </motion.div>
      <br></br>
      <br></br>
      <h3>Edit Section: 📝</h3>
      <NewsSection edit="true" width="50rem" />
    </>
  );
};
export default News;

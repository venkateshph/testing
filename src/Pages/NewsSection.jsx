import { React, useEffect, useState } from "react";

import supabase from "../security/pass";
import { Button, Skeleton } from "antd";
import { motion } from "framer-motion";
const NewsSection = (props) => {
  const [created, setCreated] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const fecth = async () => {
    const { data: username_data, err } = await supabase
      .from("News")
      .select("*")
      .range(0, 10);
    setIsloading(false);
    setCreated(username_data);
  };
  useEffect(() => {
    fecth();
    supabase
      .channel("custom-filter-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Nes", filter: "News" },
        (payload) => {
          console.log("Change received!", payload);
          fecth();
        }
      )
      .subscribe();
  });
  const delet = async (id) => {
    const { data, err } = await supabase.from("News").delete().eq("id", id);
  };
  return (
    <>
      <div className="container">
        {isloading ? (
          <Skeleton active style={{ width: "18rem" }} />
        ) : (
          <motion.div animate={{ y: 30, scale: 1 }}>
            <div
              class="card"
              style={{
                width: props.width,
                backgroundColor: "#7978E9",
                color: "white",
              }}
            >
              <div
                class="card-body"
                style={{ backgroundColor: "#7978E9", color: "white" }}
              >
                <h5 class="card-title">News:</h5>
                <h6 class="card-subtitle mb-2 " style={{ color: "white" }}>
                  Posted Latest👇
                </h6>
                <ul class="list-group list-group-flush">
                  {created.map((data) => (
                    <li
                      class="list-group-item"
                      style={{ color: "white", backgroundColor: "#7978E9" }}
                      key={data.id}
                    >
                      {data.News}
                      {props.edit ? (
                        <Button
                          onClick={async () => {
                            const { dat, err } = await supabase
                              .from("News")
                              .delete()
                              .eq("id", data.id);
                          }}
                        >
                          🗑️
                        </Button>
                      ) : (
                        <span></span>
                      )}{" "}
                      {props.edit ? (
                        <Button
                          onClick={async () => {
                            const { dat, error } = await supabase
                              .from("News")
                              .update({ News: "venkatesh" })
                              .eq("id", data.id);
                          }}
                        >
                          ✍️
                        </Button>
                      ) : (
                        <span></span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default NewsSection;

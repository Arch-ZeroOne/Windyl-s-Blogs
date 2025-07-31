import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PostsCard from "./admin/PostsCard";
import axios from "axios";

function Client() {
  useEffect(() => {
    axios.get("");
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <PostsCard />
      </div>
    </div>
  );
}

export default Client;

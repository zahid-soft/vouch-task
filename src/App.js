import React from "react";
import "./App.css";

// components import
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

// ant desing import
import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="appNavbar">
          <Navbar />
        </Header>
        <Layout>
          <Content>
            <Home />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

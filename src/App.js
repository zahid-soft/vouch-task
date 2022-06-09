import React from "react";
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="appNavbar"><Navbar /></Header>
        <Layout>
          <Content ><Home /></Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

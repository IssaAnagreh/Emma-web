import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { getAnswers } from "./apis/answersApi";
import "./App.css";
import { COLORS } from "./constants";

function App() {
  const [answers, setAnswers] = useState([]) as any;

  useEffect(() => {
    getAnswers()
      .then(({ data }: any) => setAnswers(data?.data || []))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="sideMenu-container">
        <ProSidebar width="20vw" color={COLORS.primary}>
          <SidebarHeader>
            <div className="sideMenu-title">Emma Systems</div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem>Answers List</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter></SidebarFooter>
        </ProSidebar>
      </div>
      <div className="tableContainer">
        <header>
          <h1 style={{ color: COLORS.tertiary }}>Answers List</h1>
        </header>
        {!!answers.length && (
          <table>
            <tbody>
              <tr>
                <th style={{ color: COLORS.tertiary }}>#</th>
                <th style={{ color: COLORS.tertiary }}>Date</th>
                {answers[0]?.questions?.map((item: any, index: number) => (
                  <th key={`${index}`} style={{ color: COLORS.tertiary }}>
                    {item.question}
                  </th>
                ))}
              </tr>
              {answers?.map((answer: any, index: number) => (
                <tr key={`${index}`}>
                  <td>{index + 1}</td>
                  <td>{moment(answer?.createdAt).format()}</td>
                  {answer?.questions?.map((item: any, index: number) => (
                    <td key={`${index}`}>
                      {item.answer?.length < 10
                        ? item?.answer
                        : item?.answer?.substring(0, 7) + "..."}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;

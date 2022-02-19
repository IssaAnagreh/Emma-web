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

const answersExample = [
  {
    _id: "62114bafb4ffde946e7d47a1",
    questions: [
      {
        question: "What's your email?",
        answer: "email@email.com",
      },
      {
        question: "What's your gender?",
        answer: "Male",
      },
    ],
    createdAt: "2022-02-18T22:00:00.000Z",
  },
  {
    _id: "62114bafb4ffde946e7d47a1",
    questions: [
      {
        question: "What's your email?",
        answer: "email@email.com",
      },
      {
        question: "What's your gender?",
        answer: "Male",
      },
    ],
    createdAt: "2022-02-18T22:00:00.000Z",
  },
];

function App() {
  const [answers, setAnswers] = useState(answersExample);

  useEffect(() => {
    getAnswers()
      .then(({ data }: any) => setAnswers(data))
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
        <table>
          <tbody>
            <tr>
              <th style={{ color: COLORS.tertiary }}>#</th>
              <th style={{ color: COLORS.tertiary }}>Date</th>
              {answers[0]?.questions?.map((item) => (
                <th style={{ color: COLORS.tertiary }}>{item.question}</th>
              ))}
            </tr>
            {answers?.map((answer, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{moment(answer?.createdAt).format()}</td>
                  {answer?.questions?.map((item) => (
                    <td>
                      {item.answer?.length < 10
                        ? item.answer
                        : item.answer.substring(0, 7) + "..."}
                    </td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

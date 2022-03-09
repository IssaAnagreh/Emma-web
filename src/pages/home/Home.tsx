import React, { useEffect, useState } from "react";
import { getAnswers } from "../../apis/answersApi";
import { COLORS } from "../../constants";
import TableItem from "./tableItem/TableItem";

export type ANSWER = {
  createdAt: string;
  questions: { question: string; answer: string }[];
  _id: string;
};

export default function Home() {
  const [answers, setAnswers] = useState<ANSWER[]>([]);

  useEffect(() => {
    // fetch answers from api
    getAnswers()
      .then(({ data }: any) => setAnswers(data?.data || []))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="tableContainer">
      {/* table title */}
      <header>
        <h1 style={{ color: COLORS.tertiary }}>Answers List</h1>
      </header>
      {!!answers.length && (
        <table>
          <tbody>
            {/* table head row */}
            <tr>
              <th style={{ color: COLORS.tertiary }}>#</th>
              <th style={{ color: COLORS.tertiary }}>Date</th>
              {answers[0]?.questions?.map((item: any, index: number) => (
                <th key={`${index}`} style={{ color: COLORS.tertiary }}>
                  {item.question}
                </th>
              ))}
            </tr>
            {/* table answers rows */}
            {answers?.map((answer: any, index: number) => (
              <TableItem index={index} answer={answer} key={`${index}`} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

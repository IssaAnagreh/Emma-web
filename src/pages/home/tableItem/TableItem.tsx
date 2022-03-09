import React from "react";
import moment from "moment";
import { ANSWER } from "../Home";

type ITEM = {
  question: string;
  answer: string;
};
export default function TableItem({
  answer,
  index,
}: {
  answer: ANSWER;
  index: number;
}) {
  const formatAnswer = (item: ITEM) =>
    item.answer?.length < 10
      ? item?.answer
      : item?.answer?.substring(0, 7) + "...";

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{moment(answer?.createdAt).format()}</td>
      {answer?.questions?.map((item: any, index: number) => (
        <td key={`${index}`}>{formatAnswer(item)}</td>
      ))}
    </tr>
  );
}

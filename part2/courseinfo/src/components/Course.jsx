import React from "react";
import Header from "./Header";
import Content from "./Content";

export default function Course({ course }) {
  return (
    <>
      <Header header={course.name}></Header>
      <Content parts={course.parts}></Content>
    </>
  );
}

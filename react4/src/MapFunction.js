import React from 'react'
import Content from "./Content";

export default function MapFunction() {
      // decalre variables.
      const content = [
        { id: 1, title: "اكادمية ترميز", p: "اكادمية مخصصة لتعليم البرمجة" },
        { id: 2, title: "this is post", p: "this is the third body" },
        { id: 3, title: "hello this is map", p: "Article map " },
        { id: 4, title: "new map", p: "new for map body" },
        { id: 5, },
        { id: 6, },
        { id: 7, },
        { id: 8, },
        { id: 9, },
        { id: 10, },
        { id: 11, },
      ];
      const contentMap = content.map((value) => {
        return ( <Content key={value.id} title={value.title} p={value.p} id={value.id}  /> ) 
      })

  return (
    <div>
        {contentMap}
    </div>
  );
}

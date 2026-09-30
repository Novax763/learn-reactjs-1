import React from 'react'
import Cont from './Cont'

export default function Botton() {
    const cont = [
        {let: 1, name: "Click Me", content: "😂😂😂😂"},
        {let: 2, name: "Hellp Me", content: "🙃🙃🙃🙃"},
        {let: 3, name: "Article", content: "😆😆😆😆"},
        {let: 4, name: "Download", content: "✔✔✔"},
        {let: 5},
        {let: 6}
    ]
    const contMap = cont.map((value) => {
        return (  <Cont key={value.let} name={value.name} content={value.content} /> )
    })
  return (
    <div>
      <div
        style={{
          height: "fit-content",
          width: "400px",
          border: "5px solid teal",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyContent: "center",
          margin: "20px",
        }}
      >
            {contMap}
      </div>
    </div>
  );
}

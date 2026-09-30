import "./App.css";
import Header from "./Header"
import Content from "./Content";
import Button from "./Button"



function App() {
  // decalre variables.
  return (
    <div className="App">
      <Header userName="Tarmeez Academy" />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{}}>
          <Content
            title="اكادمية حاسوب"
            user="اكادمية مخصصة في تعليم البرمجة"
          />
          <Content title="Hello" user="This is second body" />
          <Content />
          <Content title="JavaScript" user="I'am learn JavaScript " />
          <Content title="HTML" user="I'am learn HTMl" />
          <Content title="CSS" user="I'am learn Css" />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
        <div
          style={{
            margin: "20px",
            border: "5px solid teal",
            height: "fit-content",
            padding: "20px",
            width: "350px",
          }}
        >
          <Button title="new">
            <h1>😂😂😂</h1>
          </Button>
          <Button title="Article of the week">
            <img style={{height: "100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBzO-0Jej8wpv1lmZo8mw4nKe5iXt1GT_Qg&s" />
          </Button>
          <Button title="مقالات الاسبوع"></Button>
        </div>
      </div>
    </div>
  );
}


export default App;


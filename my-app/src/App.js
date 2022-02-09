import "./App.css";
import Content from "./Component/Content/Content";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import ContextWrapper from "./Context/ContextWrapper";

function App() {
  return (
    <ContextWrapper>
      <div className="App">
        <Header />
        <div className="body">
          <Sidebar />
          <Content />
        </div>
      </div>
    </ContextWrapper>
  );
}

export default App;

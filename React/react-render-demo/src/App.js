import logo from "./logo.svg";
import { UseState } from "./components/UseState/UseState";
import "./App.css";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import { Parent } from "./components/Parent Child/Parent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentTwo } from "./components/Optimization/ParentTwo";
import { ParentThree } from "./components/Incorrect Optimization/ParentThree";
import { ParentFour } from "./components/Incorrect Optimization/ParentFour";
import { ContextParent } from "./components/context/contextParent";
import { ChildA, MemoizedChildA } from "./components/context/contextChild";

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;

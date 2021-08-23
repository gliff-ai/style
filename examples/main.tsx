import ReactDOM from "react-dom";
import { BaseTextButton } from "../src";

const app = (
  <div>
    <h4>BaseTextButton</h4>
    <BaseTextButton text="Hello World" />
  </div>
);

console.log("rendering?!")
ReactDOM.render(app, document.getElementById("react-container"));

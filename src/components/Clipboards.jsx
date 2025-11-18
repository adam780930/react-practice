import { useState } from "react";
import Button from "./Button.jsx";

export default function Clipboards() {
  const [clipText, setClipText] = useState("");
  const [currentText, setCurrentText] = useState("");

  async function getClipboardText() {
    var keyname = ["First Name", "Last Name", "Gender", "Age"];
    var table = new Map();
    var text = await navigator.clipboard.readText();
    var input = text
      .replace(/(\r\n|\n|\r)/gm, "replacement")
      .split("replacement");

    //Create a key word array, and search in the paste board
    //Do not modify current loop
    var keyword = "Actions";
    var string = await navigator.clipboard.readText();
    let str = string.replace(/(\r\n|\n|\r)/gm, "wtf").split("wtf");
    for (var i = 0; i < str.length; i++) {
      if (keyword.includes(str[i])) {
        var name = str[i + 1];
        var email = str[i + 2];
        var ID = str[i + 3];
      }
    }

    for (var i = 0; i < input.length; i++) {
      //var keyvalue1= input[i];
      var keyvalue = input[i].split(":");
      var key = keyvalue[0] + "";
      var value = keyvalue[1] + "";
      if (keyname.includes(key)) {
        table.set(key, value);
      }
    }

    let fname = table.get("First Name");
    let lname = table.get("Last Name");
    let gender = table.get("Gender");
    let age = table.get("Age");

    setClipText(
      "First Name: " +
        fname +
        " / " +
        "Last Name: " +
        lname +
        " / " +
        "Age: " +
        age +
        " / " +
        "Gender: " +
        gender
    );
  }

  return (
    <div>
      <h1>
        <Button onClick={getClipboardText} buttonName={"clickpls"} />
      </h1>
      <p>{clipText}</p>
      <p>{currentText}</p>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function clearInput(){
    setInput('');
  }
  function inputChange(value){
    setInput(previous => previous + value)
  }
  function deleteLast(){
    setInput((previous) => previous.slice(0,-1))
  }
  function calculateResult(){
    if(input.includes("+")){
      let [ a,b] = input.split("+");
      setInput(parseInt(a) + parseInt(b)); 
    } else if(input.includes("-")){
      let [ a,b] = input.split("-");
      setInput(parseInt(a) - parseInt(b)); 
    } else if(input.includes('/')){
      let [ a,b] = input.split("/");
      setInput(parseInt(a) / parseInt(b)); 
    }else if(input.includes("*")){
      let [ a,b] = input.split("*");
      setInput(parseInt(a) * parseInt(b)); 
    } else{
      alert("give any operation");
    }
  }
  


  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly className="border w-72 p-2 text-right" />
      
      <div className="grid grid-cols-4 gap-2 w-72">
        <button className="bg-amber-600 text-white rounded-md p-2" onClick={clearInput}>Clear</button>
        <button className="bg-amber-600 text-white rounded-md p-2" onClick={deleteLast}>Del</button>
        <button className="bg-amber-600 text-white rounded-md p-2" ></button>
        <button className="bg-amber-600 text-white rounded-md p-2" ></button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("1")}>1</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("2")}>2</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("3")}>3</button>
        <button className="bg-amber-600 text-white rounded-md p-2" onClick={() => inputChange("+")}>+</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("4")}>4</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("5")}>5</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("6")}>6</button>
        <button className="bg-amber-600 text-white rounded-md p-2" onClick={() => inputChange("-")}>-</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("7")}>7</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("8")}>8</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("9")}>9</button>
        <button className="bg-amber-600 text-white rounded-md p-2" onClick={() => inputChange("/")}>/</button>
        <button className="bg-amber-600 text-white rounded-md p-2" onClick={calculateResult}>=</button>
        <button className="bg-gray-600 text-white rounded-md p-2" onClick={() => inputChange("0")}>0</button>
        <button className="bg-gray-600 text-white rounded-md p-2"></button>
        <button className="bg-amber-600 text-white rounded-md p-2" onClick={() => inputChange("*")}>*</button>
        
      </div>
    </section>
  );
}

export default App;

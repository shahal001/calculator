import React, { useState } from "react";

const Calc = () => {
  const [num, setNum] = useState("");

  const clicking = (event) => {
    const values = num + event.target.value;

    setNum(values);
  };

  const submit = ()=>{
    
    setNum(eval(num))
  }
 
  const deleteAll = ()=>{
    setNum("")
  }


  return (
    <div className="body">
        <div className="container">

    
<input className="input" type="text" value={num} />

      <div className="gridbox">

     

        <button className="butgy" onClick={deleteAll} value="AC">
          AC
        </button>
        <button className="butgy" onClick={submit} value="">
          =
        </button>
        <button className="butgy" onClick={clicking} value=".">
          .
        </button>
        <button className="butcolr" onClick={clicking} value="+">
          +
        </button>
        <button className="but" onClick={clicking} value="9">
          9
        </button>
        <button className="but" onClick={clicking} value="8">
          8
        </button>
        <button className="but" onClick={clicking} value="7">
          7
        </button>
        <button className="butcolr" onClick={clicking} value="-">
          -
        </button>
        <button className="but" onClick={clicking} value="6">
          6
        </button>
        <button className="but" onClick={clicking} value="5">
          5
        </button>
        <button className="but" onClick={clicking} value="4">
          4
        </button>
        <button className="butcolr" onClick={clicking} value="*">
          *
        </button>
        <button className="but" onClick={clicking} value="3">
          3
        </button>
        <button className="but" onClick={clicking} value="2">
          2
        </button>
        <button className="but" onClick={clicking} value="1">
          1
        </button>
        <button className="butcolr" onClick={clicking} value="/">
          /
        </button>
      </div>
    </div>
    </div>
  );
};

export default Calc;

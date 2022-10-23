import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [calc,setCalc]=useState("");
  const [result,setResult]=useState("");
  
  const ops=['/','*','-','+','.'];

  const updateCalc=(value)=>{
    if(ops.includes(value)){
      if(calc===""){
        if(value!=='-')
          return ;
      }
      if(value==='.'){
        let operande="";
        for(let i=calc.length-1;i>0;i--){
          if(ops.includes(calc[i])){
            operande=calc[i];
            break;
          }
        }
        console.log("opeeee",operande);
        let op=calc.slice(calc.lastIndexOf(operande)+1,calc.length);
              console.log("operande",op);
              if(op.includes('.')){
                return ;
              }
      }
    }
    if(ops.includes(value)&& ops.includes(calc.slice(-1))){
      return ;
    }
    if(value==="0" && calc==="0"){
      return ;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }
  
  const reset=()=>{
    setCalc("");
    setResult("");
    
  }

  const createDigits=()=>{
    const digits=[];
    for ( let i=1;i<10;i++){
      digits.push(<button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>)
    }

    return digits;
  }

  const calculate=()=>{
    setCalc(eval(calc).toString());
  }
  return (
    <div id='mainContent' className='bg-success'>
      <main className='vh-100 d-flex flex-column justify-content-center align-items-center'>
        <div className='container border border-info border-3 w-50 p-0' id='calcul'>
            <h2 id='display' className='text-end bg-white m-0'>{calc || "0"}
            </h2>
            <div className='row m-0'>
                <div className='col-6 p-0'>
                  <button id='clear' className='btn btn-danger w-100 p-3' onClick={reset}>AC</button>
                </div>
                <div className='col-3 p-0'>
                  <button id="divide" className='btn btn-secondary w-100 p-3' onClick={()=>updateCalc("/")}>/</button>
                </div>
                <div className='col-3 p-0'>
                  <button id="multiply" className='btn btn-secondary w-100 p-3' onClick={()=>updateCalc("*")}>*</button>
                </div>
            </div>

            <div className='row m-0'>
                <div className='col p-0'>
                  <button id='seven' className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("7")}>7</button>
                </div>
                <div className='col p-0'>
                  <button id="eight" className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("8")}>8</button>
                </div>
                <div className='col p-0'>
                  <button id="nine" className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("9")}>9</button>
                </div>
                <div className='col p-0'>
                  <button id="subtract" className='btn btn-secondary w-100 p-3' onClick={()=>updateCalc("-")}>-</button>
                </div>
            </div>

            <div className='row m-0'>
                <div className='col p-0'>
                  <button id='four' className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("4")}>4</button>
                </div>
                <div className='col p-0'>
                  <button id="five" className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("5")}>5</button>
                </div>
                <div className='col p-0'>
                  <button id="six" className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("6")}>6</button>
                </div>
                <div className='col p-0'>
                  <button id="add" className='btn btn-secondary w-100 p-3' onClick={()=>updateCalc("+")}>+</button>
                </div>
            </div>


            <div className='row m-0'>
              <div className='col-9'>
                    <div className='row'>
                      <div className='col p-0'>
                      <button id='one' className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("1")}>1</button>
                      </div>
                      <div className='col p-0'>
                        <button id="two" className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("2")}>2</button>
                      </div>
                      <div className='col p-0'>
                        <button id="three" className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("3")}>3</button>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-9 p-0'>
                        <button id='zero' className='btn btn-dark w-100 p-3' onClick={()=>updateCalc("0")}>0</button>
                      </div>
                      <div className='col-3 p-0'>
                        <button id="decimal" className='btn btn-dark w-100 p-3' onClick={()=>updateCalc(".")}>.</button>
                      </div>
                    </div>
              </div>
                
                <div className='col p-0'>
                  <button id="equals" className='btn btn-info w-100 h-100 p-3' onClick={calculate}>=</button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;

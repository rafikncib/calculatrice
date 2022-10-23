import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [calcul,setCalcul]=useState(
    {
      input:"",
      output:""
    }
  );
  //const [output,setOutput]=useState(0);
  //const [input,setInput]=useState("");
  const reset=()=>{
    setCalcul({input:'',output:''});
    //setOutput(0);
    //setInput("");
  }

  const showNumber=(event)=>{
    //setInput(input+event);
    /*if(calcul.input!=="0")
      setCalcul({input:calcul.input+event,output:calcul.output})*/
      if(event==="0"){
        if((calcul.input.length===1)&&(calcul.input==="0")){
          console.log("true");
          setCalcul({input:calcul.input,output:calcul.output});
        }else{
          setCalcul({input:calcul.input+event,output:calcul.output+event})  
        }  
      }else if(event==="."){
        if(calcul.input.indexOf(".")!==-1){
          setCalcul({input:calcul.input,output:calcul.output});
        }else{
          setCalcul({input:calcul.input+event,output:calcul.output+event})  
        } 
      }else if(["+","-"].includes(event)){
        if(calcul.input.length!==0)
        setCalcul({input:"",output:calcul.output+event});
        
      }
      else{
        setCalcul({input:calcul.input+event,output:calcul.output+event})
      }
        
      
  }

  const result=()=>{
    let res=eval(calcul.output);
    setCalcul({input:"",output:res});
    //setInput(input+"="+res.toString());
    //setOutput(res);
  }
  return (
    <div id='mainContent' className='bg-success'>
      <main className='vh-100 d-flex flex-column justify-content-center align-items-center'>
        <div className='container border border-info border-3 w-50 p-0' id='calcul'>
            <h2 id='display' className='text-end bg-white m-0'>{/*input===""?"0":input*/
            //calcul.input===""?calcul.output:calcul.input
            calcul.output===""?"0":calcul.output
            
            }</h2>
            <div className='row m-0'>
                <div className='col-6 p-0'>
                  <button id='clear' className='btn btn-danger w-100 p-3' onClick={reset}>AC</button>
                </div>
                <div className='col-3 p-0'>
                  <button id="divide" className='btn btn-secondary w-100 p-3' onClick={()=>showNumber("/")}>/</button>
                </div>
                <div className='col-3 p-0'>
                  <button id="multiply" className='btn btn-secondary w-100 p-3' onClick={()=>showNumber("*")}>*</button>
                </div>
            </div>

            <div className='row m-0'>
                <div className='col p-0'>
                  <button id='seven' className='btn btn-dark w-100 p-3' onClick={()=>showNumber("7")}>7</button>
                </div>
                <div className='col p-0'>
                  <button id="eight" className='btn btn-dark w-100 p-3' onClick={()=>showNumber("8")}>8</button>
                </div>
                <div className='col p-0'>
                  <button id="nine" className='btn btn-dark w-100 p-3' onClick={()=>showNumber("9")}>9</button>
                </div>
                <div className='col p-0'>
                  <button id="subtract" className='btn btn-secondary w-100 p-3' onClick={()=>showNumber("-")}>-</button>
                </div>
            </div>

            <div className='row m-0'>
                <div className='col p-0'>
                  <button id='four' className='btn btn-dark w-100 p-3' onClick={()=>showNumber("4")}>4</button>
                </div>
                <div className='col p-0'>
                  <button id="five" className='btn btn-dark w-100 p-3' onClick={()=>showNumber("5")}>5</button>
                </div>
                <div className='col p-0'>
                  <button id="six" className='btn btn-dark w-100 p-3' onClick={()=>showNumber("6")}>6</button>
                </div>
                <div className='col p-0'>
                  <button id="add" className='btn btn-secondary w-100 p-3' onClick={()=>showNumber("+")}>+</button>
                </div>
            </div>


            <div className='row m-0'>
              <div className='col-9'>
                    <div className='row'>
                      <div className='col p-0'>
                      <button id='one' className='btn btn-dark w-100 p-3' onClick={()=>showNumber("1")}>1</button>
                      </div>
                      <div className='col p-0'>
                        <button id="two" className='btn btn-dark w-100 p-3' onClick={()=>showNumber("2")}>2</button>
                      </div>
                      <div className='col p-0'>
                        <button id="three" className='btn btn-dark w-100 p-3' onClick={()=>showNumber("3")}>3</button>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-9 p-0'>
                        <button id='zero' className='btn btn-dark w-100 p-3' onClick={()=>showNumber("0")}>0</button>
                      </div>
                      <div className='col-3 p-0'>
                        <button id="decimal" className='btn btn-dark w-100 p-3' onClick={()=>showNumber(".")}>.</button>
                      </div>
                    </div>
              </div>
                
                <div className='col p-0'>
                  <button id="equals" className='btn btn-info w-100 h-100 p-3' onClick={result}>=</button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;

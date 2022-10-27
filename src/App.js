import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {evaluate} from 'mathjs';
function App() {
  const [calc,setCalc]=useState("");
  const [result,setResult]=useState("");
  /*const [expression,setExpression]=useState({
    op1:0,
    op:'',
    op2:0
  });*/
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
        let op=calc.slice(calc.lastIndexOf(operande)+1,calc.length);
              if(op.includes('.')){
                return ;
              }
      }
    }
    
    if(value==="0" && calc==="0"){
      return ;
    }
    if(ops.includes(value)&& ops.includes(calc.slice(-1))){
      if(value==='-'){
        if(calc.slice('-1')==='+'){
          setCalc(calc.slice(0,-1)+value);    
        }
        else setCalc(calc+value);
      }else
      setCalc(calc.slice(0,-1)+value)
    }else
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(calc+value);
    }
    console.log('calc',calc,' result',result);

  }
  
  const reset=()=>{
    setCalc("");
    setResult("");
    
  }

  /*const createDigits=()=>{
    const digits=[];
    for ( let i=1;i<10;i++){
      digits.push(<button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>)
    }

    return digits;
  }
  */
  const calculate=()=>{
    setCalc(evaluate(calc).toString());
  /*let opT=calc.split(/[+]/g).map(
    ele=>{
      if(!/^-?\d+$/.test(ele)){
        return ele;
      }else
      return ele;  
    }
  );
    //console.log('opttt',opT);
  let Sus=opT.map(elem=>{
    if(/^-?\d+$/.test(elem)){
      //console.log('elem',elem);
      return elem;}
      else
      return elem.split('-');
  }
  );
  //console.log('susTab',Sus);
  let Mult=Sus.map(elem=>{
    if(typeof(elem)==='object'){
      //console.log("simple element",elem);
      let k=elem.map(el=>{
        if(/^-?\d+$/.test(el)){
          //console.log('elem',el);
          return el;}
          else
          return el.split('*');
      })
      //console.log('kkk',k);
      return k;
    }else{
      return elem;
    }
  });
    //console.log('ok',opT);
    //console.log('sus',Sus);
    console.log('Mul',Mult);

    let sum=0;
    let sustr=0;
    let Mul=0;
    for(let i=0;i<Mult.length;i++){
      
      if(typeof(Mult[i])!=='object'){
        

        sum+=parseFloat(Mult[i]);
        console.log('somme est ',sum,'element est ',Mult[i]);
      }else{
        // sustraction
        sustr='nan';
        for(let j=0;j<Mult[i].length;j++){
          if(typeof(Mult[i][j])!='object'){
            console.log(Mult[i][j]);
            if(sustr==='nan'){
              sustr=Mult[i][j];
            }else
            sustr-=Mult[i][j];
          }else{
            Mul=1;
            for(let k=0;k<Mult[i][j].length;k++){
              if(typeof(Mult[i][j][k])!='object'){
                console.log(Mult[i][j][k]);
                Mul*=Mult[i][j][k];
                
              }
            }
            //sustr+=parseFloat(Mul);
          }
        }
        sum+=sustr;

      }

    }
    console.log('sum is',sum);
    console.log('sustraction is',sustr);
    console.log('multiplication is',Mul);
    
    /*console.log('soustraction',opS);
   console.log('mult',opM);
   console.log('multi somme',opD);
   console.log('tab de multiplication',TM);*/
   
  }
  return (
    <div id='mainContent' className='bg-success'>
      
      <main className='container-fluid bg-dark vh-100 d-flex flex-column justify-content-center align-items-center'>
        <div className='container border border-info border-3 w-50 p-0' id='calcul'>
          <h1 className='text-center text-white py-2'>Calculate</h1>
            <h2 id='display' className='text-end bg-white m-0 py-2 px-2'>
              {calc || "0"}
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

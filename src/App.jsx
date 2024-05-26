import { useState } from 'react'
import './App.css'

function App() {

  const [userInput, setUserInput] = useState("");

  const [arr, setArr] = useState([]);

  const [isChecked, setIsChecked] = useState([]);

  function handleChekboxchange(e) {

    const item = e.target.value;

    if (isChecked.includes(item)) {

      const newArray = isChecked.filter((value, i) => {

        console.log(
          `Iteration ${i}: value: ${value}, item`

        );
        return value !== item;
      });
      setIsChecked(newArray);
    } else {

      setIsChecked([...isChecked, item]);
    }

  }



  return (
    <div className='card'>
      <h2>Todo List</h2>
      <input type="text" onChange={(e) => {

        setUserInput(e.target.value)
      }} />
      <button onClick={() => {

        setArr([...arr, userInput])
      }}>

        Add Item</button>
      <ul className='listItems'>
        {
          arr.map((item, i) => {
            return (
              <li key={i}>
                <div>
                  <input id={item} name='todo-list' className='customCheckbox' type="checkbox" value={item} onChangeCapture={(e) => {

                    handleChekboxchange(e, item);
                  }} />
                  <label className='Todolabel' htmlFor={item}>
                    {

                      isChecked.includes(item) ? <del>{item}</del> : item
                    }


                  </label>
                </div>

                <button onClick={() => {

                  setArr(arr.filter((e) => e !== item));
                }}>
                  delete</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default App

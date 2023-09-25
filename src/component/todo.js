import React, { useState } from "react";
import '../App.css';
import todo from '../img/checklist.png';

const Todo = () => {

    const [inputData, setInputData] = useState('');

    const [items, setItems] = useState([]);


    const addItem = () => {
        if (!inputData) {
            alert("no data here plz write your data!");
        } else {
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const deleteItem = (id) =>{
        const updatedItems = items.filter((elem,ind)=>{
            return ind !== id; 
        });
        setItems(updatedItems);
    }

    const removeAll = () =>{
        setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todo logo" />
                        <figcaption>Add Your List Here✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍️Add Items" id=""
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />
                        <i class="fa-solid fa fa-plus fa-beat-fade add-btn" title="Add Items" onClick={addItem} ></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <i class="fa-solid fa-trash-alt fa-beat-fade" onClick={()=> deleteItem(ind)} ></i>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" onClick={removeAll} data-sm-link-text="Remove All"> <span>Check List</span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo; 
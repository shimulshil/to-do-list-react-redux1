import React, {useState} from 'react';
import "./todo.css"


const TODO=()=>{

    const [inputData, setInputData] =useState('');
    const [items, setItems]= useState([]);
    //Add Item
    const addItem = ()=>{
        if(!inputData){

        }else{
            setItems([...items, inputData]);
            setInputData('')
        }
        
    }
    // Delete Item
    const deleteItem =(id)=>{
        const updateditems = items.filter((elem, index) =>{
            return index !==id;
        });
        setItems(updateditems);
    }

    // Remove All Items
    const removeAll =()=>{
        setItems([])
    }
    return(
        <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                <div className='addItem'>
                    <input type="text" placeholder='Add Items ...' value={inputData} onChange = {(event) => setInputData(event.target.value)}></input>
                    {/* <i className='fa fa-plus add-btn' title='Add Item' onClick={addItem}></i> */}
                    <button className="add-btn add" onClick={addItem}>Add</button>

                </div>

                <div className='showItems'>
                    {
                        items.map((elem, index)=>{
                            return(
                                <div className='eachItem' key={index}>
                                    <h3>{elem}</h3>
                                    {/* <i className='far fa-trash-alt add-btn' title='Delete Item' onClick= {() => deleteItem(index)}></i> */}
                                    {/* <button className="add-btn delete" onClick= {() => deleteItem(index)}>Completed</button> */}
                                    <button className="add-btn delete" onClick= {() => deleteItem(index)}>Delete</button>

                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className='showItems'>
              <button className='btn remove_all' onClick={removeAll}>Remove All
                </button>
            </div>
            </div>
        </div>
        </>
    )
}

export default TODO;


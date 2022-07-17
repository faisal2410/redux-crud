import React, { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decreament, increament,setCustom } from '../../redux/state/counter/counterSlice';

const Counter = () => {
   const count= useSelector((state)=>state.counter.value)
   const dispatch=useDispatch();
   const myNumber=useRef();

    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={()=>dispatch(increament())} className="btn btn-success">Increase</button>
                    <button onClick={()=>dispatch(decreament())} className="btn btn-danger mx-2">Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={myNumber} className="form-control" type="number" name="" id="" />
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className='btn btn-danger  w-50 mt-2'>Set Custom</button>
                </div>
            </div>
            
        </div>
    );
};

export default Counter;
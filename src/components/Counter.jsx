import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,setValue } from '../redux/state/counter/CounterSlice';

const Counter = () => {
    const myValue = useRef(0);
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="card mt-5 ">
                <div className="card-header">
                    <h1 className='text-success text-center fw-bold'>My Counter App</h1>
                </div>   
                <div className="card-body ">
                    <h1 className="text-center my-5">{count}</h1>
                    <div className="my-3 text-center">
                        <button onClick={()=>{dispatch(decrement())}}  className='btn btn-danger px-5 mx-2'>-</button>
                        <button onClick={()=>{dispatch(increment())}} className='btn btn-success px-5 mx-2'>+</button>
                    </div>
                    <div className='my-2 '>
                        <input type="text" ref={myValue} className='form-control w-50 ' />
                        <button onClick={()=>{dispatch(setValue(myValue.current.value))}} className='btn btn-info w-50 mt-3'>Set Value</button>
                    </div>
                </div> 
                <div className="card-footer">
                    @myfoot
                </div>
            </div>             
        </div>
    );
};

export default Counter;
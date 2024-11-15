'use client';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/slices/counterslice';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
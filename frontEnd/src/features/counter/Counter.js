import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from './counterSlice';
export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      
       
    </div>
  );
}

import './Seat.scss';
import { useState } from 'react';
import {setBookingSeat} from './../duck/reducer'
import { useDispatch } from 'react-redux';

export default function Seat(props) {
  const dispatch = useDispatch();  // Use the dispatch function from the Redux store to dispatch actions
  const {seat} = props; 
  const [isSelect, setIsSelect] = useState(false);

  const handleSelectSeat = () =>{
      setIsSelect(!isSelect);
      dispatch(setBookingSeat(seat));
  }

  return (
    <div className="font-medium">
        <button 
        onClick={handleSelectSeat}
        disabled={seat.daDat}
        className={`border-solid border-2 px-4 ${isSelect ? "seat__select" : ""} ${seat.daDat ? "booked" : ""}`}>{seat.soGhe}
        </button>
    </div>
  )
}

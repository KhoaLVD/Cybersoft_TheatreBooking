import './Homepage.scss'
import Seat from './Seat/Seat';
import { useSelector } from 'react-redux'

export default function Homepage() {
    const props = useSelector((state) => state.bookingTicketReducer);
    
    const renderListSeat = () => {
        const { listSeat } = props;
        if(listSeat && listSeat.length > 0) {
            return listSeat.map((item)=> {
                if(item.hang){
                    return (
                        <div key={item.hang}>
                            <div className="grid grid-cols-13 px-4 my-8 mx-24 text-center">
                            <div>{item.hang}</div>
                            {item.danhSachGhe.map((seat)=>{
                                return (
                                    <Seat key={seat.soGhe} seat={seat} />
                                )
                            })}

                            
                            
                        </div>
                        </div>
                        
                    )
                } else {
                    return(
                        <div key={item.hang}>
                            <div className="grid grid-cols-13 mt-12 px-4 mb-4 mx-24 text-center">
                                <div></div>
                                <div className="font-medium">1</div>
                                <div className="font-medium">2</div>
                                <div className="font-medium">3</div>
                                <div className="font-medium">4</div>
                                <div className="font-medium">5</div>
                                <div className="font-medium">6</div>
                                <div className="font-medium">7</div>
                                <div className="font-medium">8</div>
                                <div className="font-medium">9</div>
                                <div className="font-medium">10</div>
                                <div className="font-medium">11</div>
                                <div className="font-medium">12</div>
                            </div>
                        </div>
                        
                    )                    
                }
            })
        } 
    }

    const totalPrice = () =>{
        return props.listSeatSelected.reduce((total, seat)=> total += seat.gia, 0);
    }

  return (
    <div>
        <h1 className="text-3xl font-bold mb-8 underline mx-auto p-4 text-center">Ngày xưa có một chuyện tình</h1>
        <p className="mx-auto p-4 text-center">Màn hình</p>
        <div className="mx-28 h-2 bg-red-600 my-2 rounded-md"></div>
        {renderListSeat()}
        {/* <div className="grid grid-cols-13 mt-12 px-4 mb-4 mx-24 text-center">
            <div></div>
            <div className="font-medium">1</div>
            <div className="font-medium">2</div>
            <div className="font-medium">3</div>
            <div className="font-medium">4</div>
            <div className="font-medium">5</div>
            <div className="font-medium">6</div>
            <div className="font-medium">7</div>
            <div className="font-medium">8</div>
            <div className="font-medium">9</div>
            <div className="font-medium">10</div>
            <div className="font-medium">11</div>
            <div className="font-medium">12</div>
        </div> */}
        {/* <div className="grid grid-cols-13 mt-12 px-4 mb-4 mx-24 text-center">
            <div>A</div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
            <div className="font-medium">
                <button className="border-solid border-2 border-green-400 px-4">A1</button>
            </div>
        </div> */}
        <div className='p-4 ghe__dang__dat fixed z-50 bottom-0 w-max bg-red-400 flex rounded-md'>
            <h2 className='font-medium bg-inherit'>Ghế đang được đặt:</h2>
            {props.listSeatSelected.map((seat)=>
                <h3 className='font-medium bg-inherit text-white mx-2'>
                    {seat.soGhe} - {seat.gia}
                </h3>     
            )}
            <h3 className='ml-8 font-medium bg-inherit'>Tổng: {totalPrice()}</h3>

        </div>
    </div>
  )
}

"use client"
import Button from "./Button";
import { useState } from "react";
export default function CreateBillList() {
    const [consumerNumber ,setConsumerNumber] = useState("");
    const [units,setUnits] = useState("");
    const [address,setAddress] = useState("") ;
    const [status ,setStatus] = useState("") ;

    const handleBillCreate =()=>{

    }
  return (
    <div>
      <Button />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col justify-center mx-auto py-8">
            <h1 className="text-3xl text-center font-bold font-black">Create Bill </h1>
            <form action="">
              <div className="flex justify-center mt-5 ">
                <label htmlFor="">Consumer Number</label>
            
                <input type="text" value={consumerNumber} onChange={(e)=>setConsumerNumber(e.target.value)} />
              </div>
              <div className="flex justify-center mt-5 ">
                <label htmlFor="">Units :</label>
                <input type="text" value={units}  onChange={(e) =>setUnits(e.target.value)}/>
              </div>
              <div className="flex justify-center mt-5 ">
                <label htmlFor="">Adress :</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="flex justify-center mt-5 ">
                <label htmlFor="">Status :</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
              </div>
              
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

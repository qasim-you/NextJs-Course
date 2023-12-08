"use client"

export default function Button() {
  return (
    <div>

<button className="btn py-7 m-8" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
    </div>
  )
}



export default function BillList({bills}) {
  return (
    <div className="overflow-x-auto flex justify-center flex-col">
       <table className="table flex justify-center items-center flex-col">
      <thead>
        <tr>
          <th>Units</th>
          <th>Consumer Number</th>
          <th>Addrres</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody className="hover">
        {bills?.map((bill) => (
          <tr key={bill.id} className="hover">
            
            <td>{bill.units}</td>
            <td>{bill.consumerNumber}</td>
            <td>{bill.address}</td>
            <td>{bill.status}</td>
            
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

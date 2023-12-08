import BillList from "./(components)/billLists/BillList";
import CreateBillList from "./(components)/createBillList/CreateBillList";
import Header from "./(components)/header/Header";
import  {prisma} from "../config/prisma" ;


const fetchBills = async()=>{
try {
  const bills = await prisma.bills.findMany() ;
  return bills
} catch (error) {
  console.log("error" ,error);
}

}

 async function Home() {

  const bills = await fetchBills() ;

  
  return (
    <div className="">
      <Header />
      <CreateBillList />


     
      <BillList bills={bills} />




    </div>
  )
}
export default Home;



// []
import { useState } from "react"

function Name4() {

  const [data, setData] = useState(0);  // int value 



  // function declaration

  function updateData() {

    setData(data + 1);


  }





  return (
    <>





      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>





    </>


  )


}
export default Name4;
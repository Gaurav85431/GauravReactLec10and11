import { useState } from "react"

function Name3() {

  const [data, setData] = useState("Gaurav");



  // function declaration

  function updateData() {

    setData("G.P.");


  }





  return (
    <>

      {/* <h1> ke under data ko pas kr rhe hia {} me */}
      <h1>{data}</h1>

      {/* function call jb btn click kre */}

      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>





    </>


  )


}
export default Name3;
import { useState } from "react"

function Name2() {

  const [data, setData] = useState("Gaurav");

  return (
    <>

      {/* <h1> ke under data ko pas kr rhe hia {} me */}
      <h1>{data}</h1>
      <button>update data</button>



    </>


  )


}
export default Name2;
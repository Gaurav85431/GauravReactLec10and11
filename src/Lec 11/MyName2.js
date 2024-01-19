import { useState } from "react"

function Name() {

  const [data, setData] = useState("Gaurav");

  return (
    <>

      <h1>Gaurav</h1>
      <button>update data</button>



    </>


  )


}
export default Name;
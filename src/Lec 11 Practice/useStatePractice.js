import { useState } from "react";


function USPractise() {

  const [data, setData] = useState(0);

  function updateData() {

    setData(data + 1);

  }
  function decData() {
    setData(data - 1);
  }


  return (
    <>


      <h1>{data}</h1>

      <button onClick={updateData}>Increase</button>


      <button onClick={decData}>Decrease</button>

    </>

  )

}
export default USPractise;
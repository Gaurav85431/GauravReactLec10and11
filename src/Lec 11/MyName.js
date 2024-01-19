function MyName() {

  let data = "Anil";
  function updateData() {

    data = "Gaurav";
    alert(data);

  }
  return (
    <>

      <div className="App">

        <h1>{data}</h1>
        <button onClick={updateData}>Update Data</button>


      </div>


    </>
  )



}
export default MyName;
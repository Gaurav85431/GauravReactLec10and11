function MyButton() {

  let data = "Gaurav Pushpam";

  function apple() {
    data = "Saurav";
    alert(data);
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={apple}>Call Apple Name</button>

      {/* jb data ka value ko Gaurav Puspam se saurav kre to v <h1> tag me change ku nhi hoa hia..
      
      --
      To overcome from this we will use state and props
      
      */}


    </>
  )

}
export default MyButton;
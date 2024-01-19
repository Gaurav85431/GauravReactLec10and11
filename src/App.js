import MyButton from "./MyButtonLEC10";

import MyName from "./Lec 11/MyName";
import Name from "./Lec 11/MyName2";
import Name2 from "./Lec 11/MyName3";

import Name3 from "./Lec 11/MyName4";

import Name4 from "./Lec 11/MyName5 Value inc by 1";

import USPractise from "./Lec 11 Practice/useStatePractice";

function App() {

  alert("WHEN Call");



  // Apple ko declare kro.
  function Apple() {
    alert("This is apple function")
  }

  function AppleCall() {
    alert("AppleCall function called");
  }


  return (

    <>

      <h3> Hello World</h3>

      <button>Click Me

      </button>
      {/* ab hm button pr onClick lagayenge aur Apple function ko call krenge */}

      <br />


      <button onClick={Apple()}>Click For Apple</button>

      {/* call inside {} curely bracket */}

      {/* jb page load hota hai to automatically function call ho jata hai. Jb click for button pr click krte hia to wo call nhi hota hai. */}
      {/* Jaise alert("when call") chala ya call hua waise hi apple() call hua. Yaani ki isko pata hi nhi chala ki jb button  pr click krega tb ye function call hona chahiye. */}



      {/* To overcome this problem jb function ko {} me likh denge without () bracket to isse ye function tab call hoga jb ki button pr click karenge. */}



      <br />


      <button onClick={AppleCall}>Click To call apple</button>

      <br />


      {/* Agr button ke onclick me alert laga de to ye automatically call ho jayega. */}
      <button onClick={alert("Automatically call ")}>onClick me alert</button>


      {/* To overcome this problem we will write alert() in arrow function */}
      <button onClick={() => { alert("This is onclick run on alert function") }}>Click onClick Alert</button>

      {/* Arrow function automatically call nhi hota hia. */}



      {/* hm arrow function me Apple function ko v v call kr skte hia */}

      <br></br>



      <button onClick={() => Apple()}> Apple with () </button>

      <br />

      <button onClick={() => Apple}> Apple without () </button>



      {/* Another scenerio    MyButton se use kra*/}<br /><br /><br />

      <MyButton />


      {/* -------------------------- */}

      <MyName />
      {/*  isse sirf alert box me name change horha hai <h1> me nhi */}


      <Name />

      {/* see MyName.js */}


      <Name2 />
      {/* <h1>{data}</h1> */}


      {/* ** */}
      <Name3 />


      {/*  */}
      <Name4 />



      {/* Use Practice i.e. USPractice */}
      <br /><br /><br />
      <h4>Increase and Decrease</h4>

      <USPractise></USPractise>

    </>

  );
}

export default App;

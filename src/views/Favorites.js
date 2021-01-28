import { useContext } from "react";
import { Context } from "../store/appContext";


function Favorites() {

  const { store } = useContext(Context);

    return (
      <>
       <h1 className='text-white ml-5'>the ones you can't get enough of.</h1>
       <ul>
      {
          !!store.globalName &&
          store.globalName.map((valor, i) => {
            return <li className='text-white lix'  key={i}>{valor}</li>
          })
      }
      </ul>
      </>
    );
  }
  
  export default Favorites;
  
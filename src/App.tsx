import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Reservation from "./pages/Reservation/Reservation";
import Header from "./components/Header/Header";
import { SBody } from "./styles";
import AppContextProvider, { AppContext } from "./AppContext";
import { useContext, useEffect } from "react";
import { IAppState } from "./types";


function App() {
  const context: IAppState = useContext(AppContext)
  const {bookedSeats, events } = context
  useEffect(() => {
    const bookedSeatsString = window.localStorage.getItem("bookedSeats");
    if(bookedSeatsString != null) {
      const parsedObject = JSON.parse(bookedSeatsString);
      const bookedSeatsMap = new Map(Object.entries(parsedObject));
      console.log(bookedSeatsMap.size)
      if(bookedSeatsMap.size > 0){
        events.addBookedSeats(bookedSeatsMap)
      }
    }
  },[])

  useEffect(()=>{console.log(bookedSeats)},[])
  return (
    <BrowserRouter>
      <Header/>
      <SBody>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="reserve" element={<Reservation/>}/>
        </Routes>
      </SBody>
    </BrowserRouter>
  );
}

export default App;

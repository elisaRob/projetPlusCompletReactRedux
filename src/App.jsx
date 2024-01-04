import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header"
import { useDispatch } from "react-redux";
import { setNoteList } from "store/note-slice";
import { NoteAPI } from "api/note-api";
import { useEffect } from "react";

export function App() {

  const dispatch=useDispatch();

  async function fetchAllNote(){
    const noteListe= await NoteAPI.fetchAll;
    dispatch(setNoteList(noteListe))
  }

useEffect(()=>{
  fetchAllNote();
},[])

  return <div className="container-fluid">
    <Header />
    <Outlet />
  </div>;
}

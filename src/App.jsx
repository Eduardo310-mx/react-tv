/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import {useState} from "react";
import {tvShows} from "./shows/data"
import ShowSelection from "./shows/ShowSelection"
import ShowDetails from "./shows/ShowDetails"

export default function App() {
  const [show] = useState(tvShows);
  //setSelectedShow: is the function to update this state, which tracks which show is currently selected by the user.
  const [selectedShow, setSelectedShow] = useState("");
  return (
    <>
      <header>
        <p>React TV</p>
        {/* shows={show}: passes the list of shows to the child component. */}
        {/* setSelectedShow={setSelectedShow}: passes the function to update the selected show. 
        This allows the child component to notify App when the user selects a show. */}
        <ShowSelection shows={show} setSelectedShow={setSelectedShow}  />
      </header>
      <main>
      {/* passes the currently selected show so it can render details for that show. */}
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}

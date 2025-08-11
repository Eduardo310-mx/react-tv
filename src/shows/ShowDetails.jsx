import { useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";


/** Allows users to browse through the episodes of the given show */
//The component receives props, and it uses destructuring to extract the show prop directly.
//show represents the currently selected TV show object passed from a parent component.
export default function ShowDetails({show}) {
  //setSelectedEpisode is a function you call to update the selectedEpisode state.
  //When selectedEpisode changes, React will re-render this component to reflect the new selection.
  const [selectedEpisode, setSelectedEpisode] = useState("");
  //This checks if the show prop is not provided is null
  //If no show is selected, the component returns early with a simple message encouraging the user to select a show.
  //This prevents the rest of the component from rendering without valid data.
  if (!show) {
    return <p>Please select a show to learn more.</p>
  }

  return (
  <div className="show-details">
      <EpisodeList 
      //Receives three props:
      //the list of episodes of the currently selected show.
      episodes={show.episodes} 
      //a function for EpisodeList to call when the user selects an episode (this updates state here).
      setSelectedEpisode={setSelectedEpisode} 
      //the current selected episode so the list can highlight it or indicate selection.
      selectedEpisode={selectedEpisode} 
      />
      {/* the episode currently selected, so it can display the episode's details like title, summary, etc. */}
      <EpisodeDetails episode={selectedEpisode} />
  </div>
  );
}

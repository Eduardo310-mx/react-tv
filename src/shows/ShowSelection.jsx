import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
//shows: an array of show objects, each representing a TV show.
//setSelectedShow: a function that updates the selected show in the parent
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        //It calls the setSelectedShow function, passing the clicked show object.
        //This updates the app’s state with the chosen show.
        <a
          key={show.name}
          href="#"
          className="show"
          onClick={(e) => {
            e.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
    
  );
  
}

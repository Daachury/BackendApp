import { useEffect, useState } from "react";
import LoginService from "../services/LoginService";
import { Link } from "react-router-dom";

const Iniciosesion = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    LoginService.getAll()
      .then((result) => {
        console.log("Respuesta", result);
        setNotes(result.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div class="main-content">
          <h4>Perfiles</h4>  
          <div className="notes-list mt-4">
            {notes &&
              notes.map((note) => (
                <div
                  key={note.id}
                  className="notes-preview mt-3 border border-secondary"
                >
                  <Link to="#">
                    <h5 className="primary-color text-capitalize">
                      {note.Nombre}
                    </h5>
                    <h5 className="primary-color text-capitalize">
                      {note.apellido}
                    </h5>
                    <p>{note.correo}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      
  );
};

export default Iniciosesion;

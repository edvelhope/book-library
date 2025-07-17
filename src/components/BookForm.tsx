import { useDispatch } from "react-redux";
import { type AppDispatch } from "../redux/store";
import { useState } from "react";
import { aggiungiBook } from "../redux/bookSlice";

export default function BookForm() {
  // Ottieni il dispatcher tipizzato per poter inviare azioni al Redux store
  const dispatch = useDispatch<AppDispatch>();

  // Stato locale per tenere traccia del contenuto dell'input titolo e testo
  const [titoloInput, setTitoloInput] = useState("");
  const [autoreInput, setAutoreInput] = useState("");

  // Funzione che gestisce il submit del form
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (titoloInput.trim() !== "" && autoreInput.trim() !== "") {
      // Invia l'azione Redux per aggiungere la nuova nota
      dispatch(
        aggiungiBook({
          titolo: titoloInput,
          autore: autoreInput,
        })
      );
      setTitoloInput("");
      setAutoreInput("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={titoloInput}
          onChange={(e) => setTitoloInput(e.target.value)}
          placeholder="Inserisci un titolo.."
        />
        <input
          className="input"
          type="text"
          value={autoreInput}
          onChange={(e) => setAutoreInput(e.target.value)}
          placeholder="Inserisci autore.."
        />
        <button className="btn btn-soft" type="submit">
          Invia
        </button>
      </form>
    </div>
  );
}

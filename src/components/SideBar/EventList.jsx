import { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [eventos, setEventos] = useState([]);
  const [novoEvento, setNovoEvento] = useState("");

  useEffect(() => {
    carregarEventos();
  }, []);

  const carregarEventos = () => {
    // Faça a solicitação à API do Google Calendar usando o Axios
    axios
      .get(
        "https://www.googleapis.com/calendar/v3/calendars/{CALENDAR_ID}/events?key={API_KEY}"
      )
      .then((response) => {
        setEventos(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const adicionarEvento = () => {
    const novoEventoObjeto = {
      summary: novoEvento,
    };

    axios
      .post(
        "https://www.googleapis.com/calendar/v3/calendars/{CALENDAR_ID}/events?key={API_KEY}",
        novoEventoObjeto
      )
      .then(() => {
        carregarEventos();
        setNovoEvento("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Eventos do Google Calendar</h1>
      <input
        type="text"
        value={novoEvento}
        onChange={(e) => setNovoEvento(e.target.value)}
        placeholder="Novo evento"
      />
      <button onClick={adicionarEvento}>Adicionar</button>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>{evento.summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;

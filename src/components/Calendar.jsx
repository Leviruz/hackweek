import { useEffect, useState } from "react";
import axios from "axios";

const Calendar = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    carregarEventos();
  }, []);

  const carregarEventos = () => {
    // Faça a solicitação à API do Google Calendar usando o Axios
    axios
      .get(
        "https://www.googleapis.com/calendar/v3/calendars/{424538243110-3bgaojcehh31452gm78tbe6nmuog5070.apps.googleusercontent.com}/events?key={AIzaSyAeM1Xy_78By8mN_0o5lTkQ-oKb0Vn84z0}"
      )
      .then((response) => {
        setEventos(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Calendário</h1>
      {eventos.map((evento) => (
        <div key={evento.id}>
          <h3>{evento.summary}</h3>
          <p>{evento.start.dateTime}</p>
          <p>{evento.end.dateTime}</p>
          <p>{evento.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Calendar;

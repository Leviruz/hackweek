import axios  from "axios";


// Definindo a chave
const API_KEY = "AIzaSyAeM1Xy_78By8mN_0o5lTkQ-oKb0Vn84z0";

// Definindo a URL base da API do Google Calendar
const BASE_URL = "https://www.googleapis.com/calendar/v3";

async function getEventList(calendarId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/calendars/${calendarId}/events?key=${API_KEY}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Chame a função para obter a lista de eventos
getEventList(
  "424538243110-3bgaojcehh31452gm78tbe6nmuog5070.apps.googleusercontent.com"
);

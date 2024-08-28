


export const formatDate = ({ isoString }: { isoString:string } ) => {  // Se recibe el string que contiene la fecha

    const date = new Date(isoString); // Se crea un objeto tipo Date con ese string

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "july",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

  const day = date.getUTCDate().toString().padStart(2, "0"); // Obtiene el día del mes (del 1 al 31) en la zona horaria UTC. Dicho número lo convierte a texto y se asegura que tenga dos dígitos (5 -> 05)
  const month = months[date.getUTCMonth()]; // Obtiene el día del mes (del 1 al 31) en la zona horaria UTC. Este valor es un índice que se usa para seleccionar el nombre del mes correspondiente del arreglo months
  const year = date.getUTCFullYear(); //  Obtiene el año completo (por ejemplo, 2023) en la zona horaria UTC.

  return `${day} ${month} ${year}`; // Retorna una cadena que representa la fecha formateada en el formato "día mes año"
}
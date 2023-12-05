import React from "react";

export const List = ({ juegos }) => {
  return (
    <div>
      <table className="table is-fullwidth is-small">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Multijugador</th>
            <th>Plataforma</th>
          </tr>
        </thead>
        <tbody>
          {juegos.map((juego) => (
            <tr>
              <td>{juego.nombre}</td>
              <td>{juego.categoria}</td>
              <td>{juego.multijugador}</td>
              <td>{juego.plataforma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

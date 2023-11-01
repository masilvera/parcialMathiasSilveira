/* eslint-disable react/prop-types */

const Card = ({ petInfo }) => {
  const { name, description } = petInfo;

  return (
    <div className="card">
      <p>Nombre: {name}</p>
      <p>Descripción: {description}</p>
    </div>
  );
};

export default Card;

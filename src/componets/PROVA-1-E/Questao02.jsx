import React, { useState } from 'react';

const PokemonMoviemnto = () => {
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);
  };

  const imagePath = isFront
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

  return (
    <div>
      <img src={imagePath} alt="Pokemon" />
      <button onClick={handleClick}>Alternar Imagem</button>
    </div>
  );
};

export default PokemonMoviemnto;

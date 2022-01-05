import React from 'react';
import styled from 'styled-components';

const Key = styled.a``;

const KeyFrame = styled.path`
  fill: ${(props) => (props.isWhite ? 'white' : 'black')};
  &:hover {
    fill: ${(props) => (props.isWhite ? '#ffd200' : '#f40082')};
  }
`;

function Keys({ shape, isWhite, audio }) {
  const song = new Audio(audio);

  const playKey = () => {
    song.play();
  };

  return (
    <Key>
      <KeyFrame d={shape} isWhite={isWhite} onClick={playKey} />
    </Key>
  );
}

export default Keys;

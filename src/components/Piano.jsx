import React from 'react';
// Import Styled-Components
import styled from 'styled-components';
// Import audio
import audio1 from '../assets/audio/key-1.mp3';
import audio2 from '../assets/audio/key-2.mp3';
import audio3 from '../assets/audio/key-3.mp3';
import audio4 from '../assets/audio/key-4.mp3';
import audio5 from '../assets/audio/key-5.mp3';
import audio6 from '../assets/audio/key-6.mp3';
import audio7 from '../assets/audio/key-7.mp3';
import audio8 from '../assets/audio/key-8.mp3';
import audio9 from '../assets/audio/key-9.mp3';
import audio10 from '../assets/audio/key-10.mp3';
import audio11 from '../assets/audio/key-11.mp3';
import audio12 from '../assets/audio/key-12.mp3';
import audio13 from '../assets/audio/key-13.mp3';
import audio14 from '../assets/audio/key-14.mp3';
import audio15 from '../assets/audio/key-15.mp3';
import audio16 from '../assets/audio/key-16.mp3';
import audio17 from '../assets/audio/key-17.mp3';
import audio18 from '../assets/audio/key-18.mp3';
import audio19 from '../assets/audio/key-19.mp3';
import audio20 from '../assets/audio/key-20.mp3';
import audio21 from '../assets/audio/key-21.mp3';
import audio22 from '../assets/audio/key-22.mp3';
import audio23 from '../assets/audio/key-23.mp3';
// Import Key component
import Keys from './Key';

const PianoMain = styled.div`
   {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Piano() {
  const pianoData = [
    {
      shape:
        'M638.996 44.2128L740.544 30.4131L714.007 451.115H651.516L638.996 44.2128Z',
      audio: audio1,
      isWhite: true,
    },
    {
      shape:
        'M627.456 442.886L525.908 456.686L552.445 35.9836L614.936 35.9836L627.456 442.886Z',
      audio: audio2,
      isWhite: true,
    },
    {
      shape:
        'M942.914 437.315L841.366 451.115L867.903 30.4131L930.395 30.4131L942.914 437.315Z',
      audio: audio3,
      isWhite: true,
    },
    {
      shape:
        'M323.538 49.7834L425.086 35.9836L398.549 456.686L336.057 456.686L323.538 49.7834Z',
      audio: audio4,
      isWhite: true,
    },
    {
      shape:
        'M1266.25 51.0879L1367.8 37.2881L1341.26 457.99H1278.77L1266.25 51.0879Z',
      audio: audio5,
      isWhite: true,
    },
    {
      shape:
        'M1266.25 444.19L1179.45 457.99L1170.96 37.2881L1244.45 37.2881L1266.25 444.19Z',
      audio: audio6,
      isWhite: true,
    },
    {
      shape:
        'M0.198484 42.9083L86.9996 29.1086L95.4927 449.811L22.0025 449.811L0.198484 42.9083Z',
      audio: audio7,
      isWhite: true,
    },
    {
      shape:
        'M1166.36 426.108L1066.54 449.292L1053.83 27.9453L1132.51 27.9451L1166.36 426.108Z',
      audio: audio8,
      isWhite: true,
    },
    {
      shape:
        'M100.091 60.9909L199.916 37.8068L212.62 459.154L133.938 459.154L100.091 60.9909Z',
      audio: audio9,
      isWhite: true,
    },
    {
      shape:
        'M1052.91 462.278L964.417 453.282L971.021 31.7954L1033.44 28.8389L1052.91 462.278Z',
      audio: audio10,
      isWhite: true,
    },
    {
      shape:
        'M213.545 24.821L302.035 33.8169L295.431 455.303L233.01 458.26L213.545 24.821Z',
      audio: audio11,
      isWhite: true,
    },
    {
      shape:
        'M751.992 30.4131L855.696 30.4131L813.855 451.115H742.286L751.992 30.4131Z',
      audio: audio12,
      isWhite: true,
    },
    {
      shape:
        'M514.46 456.686L410.756 456.686L452.597 35.9836L524.166 35.9836L514.46 456.686Z',
      audio: audio13,
      isWhite: true,
    },
    {
      shape:
        'M50.2409 20.4357L121.598 19.5728L127.98 269.937L71.194 270.624L50.2409 20.4357Z',
      audio: audio14,
      isWhite: false,
    },
    {
      shape:
        'M255.13 11.8923L188.438 13.8596L189.947 264.228L243.021 262.663L255.13 11.8923Z',
      audio: audio15,
      isWhite: false,
    },
    {
      shape:
        'M666.823 23.7702L600.131 25.7375L601.64 276.106L654.713 274.541L666.823 23.7702Z',
      audio: audio16,
      isWhite: false,
    },
    {
      shape:
        'M416.443 9.5631L459.528 15.9547L445.694 265.656L411.407 260.57L416.443 9.5631Z',
      audio: audio17,
      isWhite: false,
    },
    {
      shape:
        'M826.095 8.69799L877.949 11.8464L878.363 262.021L837.098 259.516L826.095 8.69799Z',
      audio: audio18,
      isWhite: false,
    },
    {
      shape:
        'M980.986 291.443L921.019 285.153L935.293 13.1079L983.015 18.1132L980.986 291.443Z',
      audio: audio19,
      isWhite: false,
    },
    {
      shape:
        'M1188.97 286.865L1134.4 284.46L1127.89 12.187L1171.32 14.1007L1188.97 286.865Z',
      audio: audio20,
      isWhite: false,
    },
    {
      shape:
        'M1286.92 279.16L1232.57 273.722L1241.22 1.50762L1284.47 5.8349L1286.92 279.16Z',
      audio: audio21,
      isWhite: false,
    },
    {
      shape:
        'M1384.88 289.883L1330.52 284.445L1321.41 28.6993L1382.42 16.5584L1384.88 289.883Z',
      audio: audio22,
      isWhite: false,
    },
    {
      shape:
        'M499.081 14.3453L557.845 15.7525L562.558 265.969L515.794 264.849L499.081 14.3453Z',
      audio: audio23,
      isWhite: false,
    },
  ];

  return (
    <PianoMain>
      <svg
        width="1387"
        height="467"
        viewBox="0 0 1387 467"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {pianoData.map(({ shape, isWhite, audio }, index) => (
          // eslint-disable-next-line
          <Keys key={index} shape={shape} isWhite={isWhite} audio={audio} />
        ))}
      </svg>
    </PianoMain>
  );
}

export default Piano;

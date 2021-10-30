import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const Slider1 = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2 ? "blue" : props.index === 1 ? "green" : "red"};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />; 

export default () => (
  <div style={{ width: "80%", marginLeft: "10%" }}>
    <h3> Slide</h3>
    <Slider1
      defaultValue={[30, 50]}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  </div>
);

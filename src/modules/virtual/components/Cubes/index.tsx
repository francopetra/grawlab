import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Asteroid from "./Asteroid";

export default () => {
  const group: any = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  const nodesCubes = map(new Array(50), (el, i) => {
    return <Asteroid key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};
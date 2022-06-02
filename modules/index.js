export const hobbies = (hobbies) => {
  switch (hobbies.length) {
    case 0:
      return null;
    case 1:
      return <span>I love {hobbies[0]}</span>;
    case 2:
      return (
        <span>
          I love {hobbies[0]} and {hobbies[1]}
        </span>
      );
    case 3:
      return (
        <span>
          I love {hobbies[0]} and I am mostly interested in {hobbies[1]} and{" "}
          {hobbies[2]}.
        </span>
      );
    default:
      return (
        <span>
          I love {hobbies[0]} and I am mostly interested in{" "}
          {hobbies.slice(1, hobbies.length - 2).map((hobby) => `${hobby}, `)}
          {hobbies[hobbies.length - 2]} and {hobbies[hobbies.length - 1]}
        </span>
      );
  }
};

export const CircularArrangement = (radius, unit, count, current, skew = 0) => {
  const angle = (current * 2 * Math.PI) / count + skew;
  const x = (radius / 2) * Math.sin(angle);
  const y = (radius / 2) * Math.cos(angle);
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(calc(-${x}${unit}), calc(-50% - ${y}${unit}))`,
  };
};

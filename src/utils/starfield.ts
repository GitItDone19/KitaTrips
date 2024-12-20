interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

export const createStars = (width: number, height: number, count: number): Star[] => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.1,
  }));
};

export const updateStar = (star: Star, canvasHeight: number, canvasWidth: number): Star => {
  if (star.y > canvasHeight) {
    return {
      ...star,
      y: 0,
      x: Math.random() * canvasWidth,
    };
  }
  return {
    ...star,
    y: star.y + star.speed,
  };
};
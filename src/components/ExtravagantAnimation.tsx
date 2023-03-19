import React from 'react';
import { motion, Variants } from 'framer-motion';

const circleColors = ['#e74c3c', '#3498db', '#9b59b6', '#f1c40f', '#2ecc71'];

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const OrbitingCircle = ({ color, delay, orbitDuration, size }) => {
  const variants: Variants = {
    animate: {
      rotate: 360,
      scale: [1, 1.2, 1],
      backgroundColor: circleColors,
      transition: {
        duration: orbitDuration,
        ease: 'linear',
        repeat: Infinity,
        delay,
        repeatType: 'loop',
      },
    },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
      variants={variants}
      initial="animate"
      animate="animate"
    >
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: '50%',
        }}
      />
    </motion.div>
  );
};

const ExtravagantAnimation = () => {
  const circles = [];
  for (let i = 0; i < 50; i++) {
    circles.push({
      color: circleColors[Math.floor(Math.random() * circleColors.length)],
      delay: randomBetween(0, 2),
      orbitDuration: randomBetween(2, 10),
      size: randomBetween(20, 80),
    });
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        width: 500,
        height: 500,
      }}
    >
      {circles.map((circle, index) => (
        <OrbitingCircle
          key={index}
          color={circle.color}
          delay={circle.delay}
          orbitDuration={circle.orbitDuration}
          size={circle.size}
        />
      ))}
    </div>
  );
};

export default ExtravagantAnimation;
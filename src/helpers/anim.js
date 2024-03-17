export const Menu = {
  menuOpen: {
    initial: {
      height: 0,
      left: 0,
      right: 0,
    },
    enter: {
      height: "max(75lvh, 507px)",
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  menuContainer: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  },
};

const transition = {
  duration: 0.7,
  ease: [0.28, 0.02, 0, 1.02]
};

const transformForNumbers = [86, 69, 52, 34, 17, 0];

export const servicesAnim = (currNum) => {
  return {
    numbers: {
      initial: {
        transform: `translateY(${transformForNumbers[currNum]}%)`,
        transition,
      },
      animate: {
        transform: `translateY(${transformForNumbers[currNum - 1]}%)`,
        transition,
      },
      exit: {
        transform: `translateY(${transformForNumbers[currNum]}%)`,
        transition,
      },
    },
    text: {
      initial: {
        filter: "blur(0.8vw)",
        transition,
      },
      animate: {
        filter: "blur(0vw)",
        transition,
      },
      exit: {
        filter: "blur(0.8vw)",
        transition,
      },
    },
  };
};

export const blogAnim = {
  Presence: {
    initial: {
      opacity: 0,
      filter: "blur(1vw)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0vw)",
    },
    exit: {
      opacity: 0,
      filter: "blur(1vw)",
    },
  },
};

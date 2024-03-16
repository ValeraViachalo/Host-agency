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
        delay: .2,
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
        duration: .5,
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
    }
  }
};

export const servicesAnim = {
  numbers: {
    initial: {
      transform: "translateY(120%)",
      transition: {
        duration: 0.3,
        easing: [0.28, 0.02, 0, 1.02],
      },
    },
    animate: {
      transform: "translateY(0%)",
      transition: {
        duration: 0.3,
        delay: 0.1,
        easing: [0.28, 0.02, 0, 1.02],
      },
    },
    exit: {
      transform: "translateY(-150%)",
      transition: {
        duration: 0.4,
        easing: [0.28, 0.02, 0, 1.02],
      },
    },
  },
  text: {
    initial: {
      filter: "blur(3vw)",
    },
    animate: {
      filter: "blur(0vw)",
    },
    exit: {
      filter: "blur(3vw)",
    },
  }
}

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
  }
};
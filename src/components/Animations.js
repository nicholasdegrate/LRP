import gsap from "gsap";

/*******************
header
*******************/
// OPEN MENU
export const reveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const revealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};

// Hover on the link
export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut",
  });
};

// Hover off the link
export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut",
  });
};

export const staggerText = (node1, node2, node3, node4, node5) => {
  gsap.from([node1, node2, node3, node4, node5], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const revealContact = (node1) => {
  gsap.from(node1, {
    duration: 0.8,
    width: 0,
    transformOrigin: "right top",
    // skewX: 3,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

export const revealCloseContact = (node1) => {
  gsap.to(node1, {
    duration: 0.8,
    width: 0,
    // transformOrigin: "right top",
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};

export const dropdown = (node1) => {
  gsap.from(node1, {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

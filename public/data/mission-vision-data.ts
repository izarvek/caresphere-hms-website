interface MissionVision {
  heading: string;
  paragraph: {
    para1: string;
    para2: string;
    para3: string;
  };
}

export const missionVisionData: MissionVision[] = [
  {
    heading: "Our Mission",
    paragraph: {
      para1: `At CareSphere, our mission is to deliver world-class healthcare
      services that prioritize the needs of our patients above all else.`,

      para2: `We are committed to providing compassionate, accessible, and
      innovative care tailored to the individual, ensuring that every
      patient feels supported, valued, and empowered.`,

      para3: `By combining cutting-edge medical advancements with a personal
      touch, we strive to improve lives, foster wellness, and build
      lasting relationships with those we serve.`,
    },
  },
  {
    heading: "Our Vision",
    paragraph: {
      para1: ` Our vision is to create a healthier future for all by
                redefining what exceptional care means.`,

      para2: `We aim to be a global leader in healthcare, leveraging
                innovation and technology to deliver comprehensive solutions
                that meet the evolving needs of our communities.`,

      para3: `Through continuous growth and dedication, we envision a world
                where everyone has access to quality care, where health
                disparities are reduced, and where CareSphere stands as a symbol of
                trust, excellence, and compassion.`,
    },
  },
];

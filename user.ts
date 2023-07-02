export type UserProfile = {
  name: string;
  imageUrl: string;
  about: string;
  profession: string;
  dob: string;
  gender: string;
  privacy: {
    followers: boolean;
    xp: boolean;
    achievementBadges: boolean;
  };
};

export type UserSocials = { type: string; value: string }[];

export type UserPortfolio = {
  playgrounds: {
    id: number;
    title: string;
    tech: string;
    time: string;
    icon: string;
    sharedWith: string[];
    show: boolean;
    imageUrls: string[];
  }[];
  projects: {
    id: number;
    title: string;
    tech: string[];
    time: string;
    contributors: number;
    contributorsImages: string[];
    image: string;
    show: boolean;
  }[];
};

export type UserResume = {
  about: string;
  workExp: {
    icon: string;
    title: string;
    location: string;
    company: string;
    duration: {
      from: string;
      to: string;
    };
    description: string;
    responsibilities: string[];
  }[];
  education: {
    icon: string;
    title: string;
    location: string;
    degree: string;
    duration: {
      from: string;
      to: string;
    };
    description: string;
  }[];
  techSkills: {
    icon: string;
    title: string;
  }[];
  interests: string[];
  languages: string[];
};
export type UserData = {
  level: number;
  notifications: number;
  profile: UserProfile;
  socials: UserSocials;
  portfolio: UserPortfolio;
  resume: UserResume;
};

const userData: UserData = {
  level: 5,
  notifications: 1,
  profile: {
    name: "Marina Budarina",
    imageUrl:
      "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c?fuid=1255883831497588317",
    about: "Lorem ipsum dolor sit amet.",
    profession: "Student",
    dob: "",
    gender: "",
    privacy: {
      followers: true,
      xp: true,
      achievementBadges: true,
    },
  },
  socials: [
    { type: "Github", value: "github/profile.com" },
    { type: "Linkedin", value: "" },
    { type: "Facebook", value: "" },
    { type: "Instagram", value: "" },
    { type: "Dribbble", value: "" },
    { type: "Behance", value: "" },
  ],
  portfolio: {
    playgrounds: [
      {
        id: 1,
        title: "Playground title",
        tech: "HTML/CSS",
        time: "1 min ago",
        icon: "html-5",
        sharedWith: [
          "Adam",
          "Anna",
          "Raj",
          "Ayush",
          "Uday",
          "Kunal",
          "Shivam",
          "Jinendra",
          "Sanskar",
        ],
        show: true,
        imageUrls: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
      },
      {
        id: 2,
        title: "Playground title",
        tech: "HTML/CSS",
        time: "1 min ago",
        icon: "javascript",
        sharedWith: [
          "Adam",
          "Anna",
          "Raj",
          "Ayush",
          "Uday",
          "Kunal",
          "Shivam",
          "Jinendra",
          "Sanskar",
        ],
        show: true,
        imageUrls: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
      },
      {
        id: 3,
        title: "Playground title",
        tech: "HTML/CSS",
        time: "1 min ago",
        icon: "javascript",
        sharedWith: [
          "Adam",
          "Anna",
          "Raj",
          "Ayush",
          "Uday",
          "Kunal",
          "Shivam",
          "Jinendra",
          "Sanskar",
        ],
        show: true,
        imageUrls: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
      },
      {
        id: 4,
        title: "Playground title",
        tech: "HTML/CSS",
        time: "1 min ago",
        icon: "html-5",
        sharedWith: [
          "Adam",
          "Anna",
          "Raj",
          "Ayush",
          "Uday",
          "Kunal",
          "Shivam",
          "Jinendra",
          "Sanskar",
        ],
        show: true,
        imageUrls: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
      },
    ],
    projects: [
      {
        id: 1,
        title: "Personal Portfolio Website",
        tech: ["HTML/CSS", "Javascript"],
        time: "1 min ago",
        contributors: 3,
        contributorsImages: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
        image:
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/d87c5b7bd8a14b4d9acedfe466a81bcaa6ee8191",
        show: true,
      },
      {
        id: 2,
        title: "Personal Portfolio Website",
        tech: ["HTML/CSS", "Javascript"],
        time: "1 min ago",
        contributors: 3,
        contributorsImages: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
        image:
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/acae61b4bf71cb881bebd0a2d10f2006c6dc6e8a",
        show: true,
      },
      {
        id: 3,
        title: "Personal Portfolio Website",
        tech: ["HTML/CSS", "Javascript"],
        time: "1 min ago",
        contributors: 3,
        contributorsImages: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
        image:
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/acae61b4bf71cb881bebd0a2d10f2006c6dc6e8a",
        show: true,
      },
      {
        id: 4,
        title: "Personal Portfolio Website",
        tech: ["HTML/CSS", "Javascript"],
        time: "1 min ago",
        contributors: 3,
        contributorsImages: [
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/3cc94ed922f137a58e97cebb65693bfda4ce4006",
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/60f9fe52539057a35a53d60a2ea84a869314446c",
        ],
        image:
          "https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/image/acae61b4bf71cb881bebd0a2d10f2006c6dc6e8a",
        show: true,
      },
    ],
  },
  resume: {
    about:
      "A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done.\nA student who is passionate and with a keen eye for design ...",
    workExp: [
      {
        icon: "google",
        title: "Front-end Developer at Google",
        location: "London",
        company: "Google Inc.",
        duration: {
          from: "May 2021",
          to: "Present",
        },
        description:
          "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.",
        responsibilities: [],
      },
      {
        icon: "facebook",
        title: "Junior Front-end Developer at Meta",
        location: "New York",
        company: "Meta Inc.",
        duration: {
          from: "July 2020",
          to: "May 2021",
        },
        description:
          "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. ",
        responsibilities: [
          "Create an appealing design and turn it into a WordPress plugin",
          "Manage all technical aspects of the CMS",
          "Conducting website/application tests",
        ],
      },
    ],
    education: [
      {
        icon: "harvard",
        title: "Harvard University",
        location: "Cambridge, GA",
        degree: "Bachelor degree, Computer Science(Bsc)",
        duration: {
          from: "May 2020",
          to: "Present",
        },
        description:
          "Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website",
      },
      {
        icon: "harvard",
        title: "Mister Bim High School",
        location: "Atlanta, GA",
        degree: "",
        duration: {
          from: "September 2016",
          to: "2020",
        },
        description: "",
      },
    ],
    techSkills: [
      {
        icon: "html-5",
        title: "HTML 5",
      },
      {
        icon: "css",
        title: "CSS 3",
      },
      {
        icon: "javascript",
        title: "Javascript",
      },
      {
        icon: "react",
        title: "React",
      },
      {
        icon: "nextjs",
        title: "Next.js",
      },
      {
        icon: "mongo",
        title: "Mongo",
      },
      {
        icon: "node",
        title: "NodeJs",
      },
      {
        icon: "python",
        title: "Python",
      },
      {
        icon: "java",
        title: "Java",
      },
    ],
    interests: [
      "Semantics",
      "TED Talks",
      "Udemy",
      "Behavioral",
      "Economics",
      "Hiking",
    ],
    languages: ["English", "Mandarin", "Cantonese Chinese"],
  },
};

export default userData;

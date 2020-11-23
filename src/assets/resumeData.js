const resumeLink =
  "";
const publicAssetPath = "public";
const assetPath = "assets";

export default {
  main: {
    name: "Anastasiya Kalinina",
    occupation: "Full-Stack Software Engineer ",
    description: "I am always looking for ",
    description2:
      ", whether that be open source projects, internships, or new technologies, ",
    image: "profilepic.jpg",
    bio:
      "I am a software engineer. Not only do I like to program, but I am passionate about writing clean, smart, and efficient code! Over my schooling and work terms I have been exposed to many languages and frameworks, but some of my favourites are Javascript, C Go, and Python. I recently started my dive into web development, more specifically using the ReactJS/NodeJS libraries. I hope to explore more full stack opportunities in the future!",
    contactmessage: "Drop me a line:",
    email: "an_kalinina@mail.ru",
    phone: "",
    address: {
      street: "",
      city: "Minsk",
      state: "",
      zip: "",
    },
    website: "https://www.",
    resumedownload: resumeLink,
    social: [
    ],
  },
  resume: {
    skillmessage:
      "Some technology I am passionate about, and an overview of my skills",
    education: [
      {
        school: "University of Guelph",
        degree: "Software Engineering",
        graduated: "Exp. April 2021",
        description:
            "Currently in my fourth year studying Software Engineering. Some interesting and favourite courses I have taken so far have been Software Design I - IV, Data Structures, Algorithms, Operating Systems and the infamous 'Angel of Death' (Software Systems and Integrations). Currently on the Dean's List for maintaining an overall average of 80%. I am looking forward to my databases and quantum computing classes.",

      },
      {
        school: "Holy Trinity C.S.S",
        degree: "O.S.S.D - Ontario Scholar",
        graduated: "June 2016",
        description:
            "Highschool is where I was first introduced to programming and computer science. I started learning the fundamentals using the Turing and Java programming languages. I graduated as an Ontario Scholar and maintained an overall average of 95% in all CIS courses.",

      },
    ],
    techSkills: [
      {
        imageSrc: `${publicAssetPath}/images/tech/react.png`,
        header: "ReactJS",
        text:
          "I have been doing a lot of frontend work with the react library, and I absolutely love it! It is so versatile and is my go to for frontend web development. " +
            "Pairing React with some other very powerful libraries and frameworks that I like (redux, redux sagas, axios, styled components) makes for a super strong frontend stack!",
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/node.png`,
        header: "NodeJS",
        text:
          "After recently branching out into backend web development, node, express and knex are some of the tools I am using to build my backend architecture. " +
            "I enjoy writing Javascript, and this pairs well with a frontend Javascript framework.",
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/c.png`,
        header: "C",
        text:
          "The C Programming language is my strongest language. " +
            "I liked the low-levelness of this language, and my algorithms and data structures classes all utilized C. " +
            "Learning this language made me appreciate dynamic languages, but also allowed me to understand how they work behind the scenes.",
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/golang.png`,
        header: "Golang",
        text:
          "I am currently also exploring Go development for fast backend services, as well as networking. " +
            "I like the C feel the language gives, but with modern features and strict typing.",
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/mongo.png`,
        header: "MongoDB",
        text:
          "Document based or non-relational databases are my go to for a quick and easy DB. I love the flexibility they provide and how easy they scale horizontally." +
            " I use Mongo for most of my personal projects.",
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/mysql.png`,
        header: "SQL",
        text:
          "After learning SQL through projects, I was able use these skills at previous co-ops where we utilized MySQL and PostgreSQL. "
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/firebase.png`,
        header: "Firebase",
        text:
          "After exploring the whole firebase ecosystem for a side project, I can say that I really enjoy using it." +
            " I utilized almost everything firebase had to offer including its firestore, cloud functions, storage buckets, authentication and hosting." +
            " I use firebase to quickly spin up a test DB, or for less extensive native or web apps.",
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/java.png`,
        header: "Java",
        text:
          "Java is my favourite OO language and I have been programming with Java since highschool. " +
            "I made my first graphical application with Java while working at my fist job.",
      },
      {
        imageSrc: `${publicAssetPath}/images/tech/python.png`,
        header: "Python",
        text:
          "Python is something I am still exploring/learning, but I am very interested in it as I would like to explore AI/Machine learning in the future." +
            " Not to mention no more curly braces and semicolons :)",
      },
    ],
    barSkills: [
      {
        name: "ReactJS/Redux",
        level: "90%",
      },
      {
        name: "Git",
        level: "100%",
      },
      {
        name: "NodeJS/Express",
        level: "85%",
      },
      {
        name: "Databases/SQL",
        level: "100%",
      },
      {
        name: "HTML5/CSS3",
        level: "95%",
      },
      {
        name: "Data Structures / Algorithms",
        level: "90%",
      },
      {
        name: "Agile Methodologies",
        level: "100%",
      },
    ],
  },
  testimonials: {
    testimonials: [
      {
        text:
          "'One of the best programming skills you can have is knowing when to walk away for awhile.' - Oscar Godson.",
        user:
          "I love to program, but love interacting even more. I am ready to work on new and exciting things, with new and exciting people!",
      },
    ],
  },
};

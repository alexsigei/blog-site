import blogLogo from "./assets/blog.jpg";

const blog = {
  name: "Alex's Blog",
  image: blogLogo,
  about: "Welcome to my personal blog where I share my thoughts on technology and programming.",
  posts: [
    {
      id: 1,
      title: "My First React Project",
      date: "August 6, 2026",
      preview: "React makes building user interfaces much easier with reusable components."
    },
    {
      id: 2,
      title: "Learning JavaScript",
      date: "July 28, 2026",
      preview: "JavaScript is the language of the web and opens the door to modern web development."
    },
    {
      id: 3,
      title: "Why I Enjoy Coding",
      date: "July 15, 2026",
      preview: "Coding allows me to solve problems creatively and build useful applications."
    }
  ]
}

export default blog;
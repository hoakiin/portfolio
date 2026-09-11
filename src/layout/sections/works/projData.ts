import tmdbImg from "../../../assets/images/projects/tmdb.png";
import todolistImg from "../../../assets/images/projects/todolist.jpg";
import musicfunImg from "../../../assets/images/projects/musicfun.png";
import horizonImg from "../../../assets/images/projects/horizon.png";
import counterImg from "../../../assets/images/projects/counter.jpg";

export type ProjectType = {
  id: number;
  categories: Array<string>;
  title: string;
  src: string;
  tags: Array<string>;
  text: string;
  link: string;
  demoLink: string;
  codeLink: string;
};

export const projData: Array<ProjectType> = [
  {
    id: 1,
    categories: ["react"],
    title: "TMDB / Kinopoisk",
    src: tmdbImg,
    tags: ["React", "TypeScript", "Redux Toolkit", "RTK Query"],
    text: "Movie search and discovery platform using external APIs.",
    link: "https://tmdb-kinopoisk-hoakiin.vercel.app/",
    demoLink: "https://tmdb-kinopoisk-hoakiin.vercel.app/",
    codeLink: "https://github.com/hoakiin/TMDB-kinopoisk",
  },
  {
    id: 2,
    categories: ["react"],
    title: "TodoList",
    src: todolistImg,
    tags: ["React", "TypeScript", "RTK Query", "MUI"],
    text: "Task management application with CRUD operations and authentication.",
    link: "https://hoakiin.github.io/todolist/",
    demoLink: "https://hoakiin.github.io/todolist/",
    codeLink: "https://github.com/hoakiin/todolist",
  },
  {
    id: 3,
    categories: ["react"],
    title: "MusicFun",
    src: musicfunImg,
    tags: ["React", "TypeScript", "Redux Toolkit", "RTK Query"],
    text: "Music streaming interface with playlists and album browsing.",
    link: "https://musicfun-hoakiin.vercel.app/",
    demoLink: "https://musicfun-hoakiin.vercel.app/",
    codeLink: "https://github.com/hoakiin/musicfun",
  },
  {
    id: 4,
    categories: ["react", "nextjs"],
    title: "Horizon",
    src: horizonImg,
    tags: ["Next.js", "TypeScript", "Appwrite", "Plaid"],
    text: "Full-stack banking application with account management and financial features.",
    link: "https://banking-hoakiin.vercel.app/",
    demoLink: "https://banking-hoakiin.vercel.app/",
    codeLink: "https://github.com/hoakiin/horizon",
  },
  {
    id: 5,
    categories: ["react"],
    title: "Counter",
    src: counterImg,
    tags: ["React", "TypeScript", "Redux Toolkit", "CSS Modules"],
    text: "React application demonstrating state management with Redux Toolkit.",
    link: "https://hoakiin.github.io/counter-v2/",
    demoLink: "https://hoakiin.github.io/counter-v2/",
    codeLink: "https://github.com/hoakiin/counter-v2",
  },
];
import BlogShots from "./components/home/blogShots";
import HeroComponent from "./components/home/heroComponent";
import NavbarComponent from "./components/navbar";

export default function Home() {
  return (
    <div>
      <title>AdityaVikky</title>
      <meta
        name="description"
        content="UI/UX and Motion Design and beginner Website Programmer"
      />
      <link rel="icon" href="/dribbbleicon.ico" />
      <NavbarComponent />
      <HeroComponent />
      <BlogShots />
    </div>
  );
}

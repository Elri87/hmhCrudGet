import Dogs from "@/components/Dogs.jsx";
import styles from "./page.module.css";
import Memes from "@/components/Memes.jsx";
import Pokemon from "@/components/Pokemon.jsx";
import Beer from "@/components/Beer.jsx";

export default function Home() {
  return (
    <div>
      <Dogs />
      <Memes />
      <Pokemon />
      <Beer />
    </div>
  );
}

import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {

  const dark = false;

  return (
    <>
    <h1>Hello, World</h1>
    <div className="Header">
      <Header />
      <Main />
    </div>
    </>
  );
}

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonathan Henrich - EPK",
};
export default function Home() {
  return (
    <>
      <main className="rounded-b-xl ">
        <Navbar />
      </main>
      <Footer />
    </>
  );
}

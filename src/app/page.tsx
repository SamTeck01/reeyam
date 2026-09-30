import ReadingProgress from "@/components/ReadingProgress";
import Hero from "@/components/Hero";
import Prologue from "@/components/Prologue";
import Timeline from "@/components/Timeline";
import Noticed from "@/components/Noticed";
import YouSaid from "@/components/YouSaid";
import Gallery from "@/components/Gallery";
import Ordinary from "@/components/Ordinary";
import Letter from "@/components/Letter";
import Epilogue from "@/components/Epilogue";

export default function Page() {
  return (
    <>
      <ReadingProgress />
      <Hero />
      <main>
        <Prologue />
        <Timeline />
        <Noticed />
        <YouSaid />
        <Gallery />
        <Ordinary />
        <Letter />
        <Epilogue />
      </main>
    </>
  );
}

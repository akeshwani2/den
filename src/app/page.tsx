import Body from "./components/ForYou";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col min-h-screen relative bg-black text-white">
      <Body />
      <div className="absolute bottom-0 left-0 w-full h-80 pointer-events-none bg-gradient-to-t from-white/13 to-transparent" />
    </div>
  );
}

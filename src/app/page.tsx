import { Container } from "@/components/container";

export default function Home() {
  return (
    <div className="space-y-6 px-2 py-8 text-center lg:py-24 md:py-12 ">
    <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-3 sm:grid-cols-2 ">
      <Container url={"/"} title={"Test"} description={"This is just a testing text"} />
      <Container url={"/"} title={"Test"} description={"This is just a testing text"} />
      <Container url={"/"} title={"Test"} description={"This is just a testing text"} />
      </div>
    </div>
  );
}

import { Header } from "@/app/components/layout/Header";
import { Hero } from "@/app/components/layout/Hero";
import { HomeMenu } from "@/app/components/layout/HomeMenu";
import { SectionHeaders } from "@/app/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className={"text-center my-16"}>
        <SectionHeaders header={"Our story"} subHeader={"About us"} />
        <div
          className={"text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            blanditiis consequuntur debitis dolore esse molestias quis ratione
            velit. Consequuntur corporis cupiditate exercitationem laudantium
            officia porro quaerat rem tempore tenetur voluptates!
          </p>
          <p>
            Animi blanditiis consequuntur debitis dolore esse molestias quis
            ratione velit. Consequuntur corporis cupiditate exercitationem
            laudantium officia porro quaerat rem tempore tenetur voluptates!
          </p>
          <p>
            Consequuntur corporis cupiditate exercitationem laudantium officia
            porro quaerat rem tempore tenetur voluptates!
          </p>
        </div>
      </section>

      <section className={"my-8 text-center"}>
        <SectionHeaders header={"Contact us"} subHeader={"Don't hesitate"} />
        <div className={"mt-8"}>
          <a
            className={"text-4xl underline text-gray-500"}
            href={"tel:+375336570090"}
          >
            +375 33 657-00-90
          </a>
        </div>
      </section>
    </>
  );
}

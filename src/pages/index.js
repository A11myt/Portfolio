import { Navigation } from "@/components/molecules/Navigation";
import { Hero } from "@/components/molecules/Hero";
import { About } from "@/components/molecules/About";
import { Projects } from "@/components/molecules/Projects";
import { Contact } from "@/components/molecules/Contact";
import { Footer } from "@/components/molecules/Footer";

export default function Home() {
  return (
    <div>
      <Navigation
        navigation={['Home', 'Projekte', 'Kontakt']}
        media={true} />
      <Hero
        bgColor={'bg-main-50'}
        title={'Hi! Ich bin Jason.'}
        content={'Seit 2020 programmiere ich... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. '} />

      <About
        bgColor={'bg-main-100'}
      />

      <Projects
        bgColor={'bg-main-100'}

      />

      <Contact
        bgColor={'bg-main-100'}
        title={'Kontakt!'}
        content={'melde dich!'}

        label={'Button'}
        activeLink={true}
        link={'mailTo:Jason.j@gmx.de'} />

      <Footer
        bgColor={'bg-main-50'}
      />
    </div>
  )
}

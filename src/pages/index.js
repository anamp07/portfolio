import Head from "next/head"
import Navigation from "@/components/Navigation"
import AboutMe from "@/sections/AboutMe"
import Experience from "@/sections/Experience"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"
import { Data } from '../data/aboutme'
import { Container } from "@mui/material"
import Hero from "@/components/Hero"

export default function Home() {

  return (
    <>
      <Head>
        <title>Ana Pantoja - Portfolio</title>
        <meta name="description" content="Ana Pantoja personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>
        <Container maxWidth="md" sx={{ paddingY: '3.125rem', mt: '3.125rem' }}>
          <Hero data={Data.hero}/>
          <AboutMe data={Data.about} />
          <Experience experience={Data.experience} />
          <Projects projects={Data.projects} />
          <Contact contact={Data.contact} />
        </Container>
      </main>
    </>
  );
}

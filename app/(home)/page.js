import Header from "@/components/header";
import HomeLayout from "@/layouts/home"
import Contact from "@/layouts/contact"
import About from "@/layouts/about"
import Resume from "@/layouts/resume"
import Projects from "@/layouts/projects"
import ScroolContent from "@/components/scrool-content";
import Courses from "@/layouts/courses";

export default function Page() {
  return (
    <ScroolContent>
      <HomeLayout />

      <About />

      <Resume />

      <Projects />

      <Courses />
      
      <Contact />
    </ScroolContent>
  )
}

import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Contact1 from "@/components/sections/home1/Contact1"
import Team1 from "@/components/sections/home1/Team1"
import Service from "@/components/sections/home1/Service"
import Video1 from "@/components/sections/home1/Video1"
import News from "@/components/sections/home1/News"
import Chooseus from "@/components/sections/home1/Chooseus"
import Fundraise from "@/components/sections/home1/Fundraise"
import Testimonial from "@/components/sections/home1/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Service />
                <About />
                <Fundraise />
                <Chooseus />
                <Video1/>
                <Team1 />
                <Testimonial />
                <News />
                <Contact1 />
            </Layout>
        </>
    )
}
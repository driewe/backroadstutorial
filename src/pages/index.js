import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from '../components/Home/About'
import Services from "../components/Home/Services"


export default () => (
        <Layout>
            <SimpleHero>
                <Banner title="continue exploring" info="Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.">
                <Link to="/tours" className="btn-white">explore tours</Link>
                </Banner>
            </SimpleHero>
            <About />
            <Services />
        </Layout>
)
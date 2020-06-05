import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Research | ${config.siteTitle}`} />
      <p>
      My research so far has involved investigating defective and off-stoichiometric properties of solid electrolyte materials.
      <ol>
      <li><a href="https://pubs.acs.org/doi/10.1021/acs.chemmater.9b04319" target="_blank">Native Defects and Their Doping Response in the Lithium Solid Electrolyte Li<sub>7</sub>La<sub>3</sub>Zr<sub>2</sub>O<sub>12</sub></a> in which we investigate the native defect chemistry of the lithium conducting garnet LLZO, and how these defects respond to typical doping strategies. Our model predicts that typical assumptions about the effects of dopants are not unversially true, while well replicating previously reported experimental results concerning oxygen vacancy formation and bulk properties.</li>
      </ol>
      </p>
    </main>
  </Layout>
)
export default ContactPage

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Code | ${config.siteTitle}`} />
      <p>
      I rely on the excellent materials chemistry software ecosystem for all aspects of my work. Some codes I use most frequently include
      </p>
      <ul>
      <li><a href="https://pymatgen.org" target="_blank">Pymatgen</a> for pre- and post-processing DFT calculation</li>
      <li><a href="https://wiki.fysik.dtu.dk/ase/index.html" target="_blank">ASE</a> for pre- and post-processing and running DFT calculation</li>
      <li><a href="https://icet.materialsmodeling.org/moduleref_icet/index.html" target="_blank">icet</a> pythonic cluster expansion</li>
      <li><a href="https://prisms-center.github.io/CASMcode_docs/" target="_blank">CASM</a> C++ cluster expansion</li>
      </ul>
    </main>
  </Layout>
)
export default ContactPage

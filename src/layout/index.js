import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import Particles from 'react-particles-js'
import styles from './index.module.scss'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
    <Particles
      style={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: 0
      }}
      params={{
        particles: {
          color: { value: '#42c2f5' },
          number: {
            value: 300
          },
          opacity: {
            value: 0.1
          },
          move: {
            speed: 0.4
          },
          size: {
            value: 2
          },
          line_linked: {
            distance: 150,
            color: '#42c2f5',
            opacity: 0.5
          }
        }
      }}
    />
    <Footer />
  </>
)

export default MainLayout

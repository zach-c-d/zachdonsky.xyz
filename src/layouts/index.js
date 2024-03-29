import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga'

import '../assets/styles/reset.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import theme from '../themes/main.js'
import inRegexArray from '../helpers/in-regex-array.js'

const largeHeaderPages = [
  /^\/$/, // index
]

if (typeof window !== 'undefined') {
  var WebFont = require('webfontloader')

  WebFont.load({
    typekit: {
      id: 'bhs8rbg'
    }
  });
}

class TemplateWrapper extends React.Component {
  constructor(props) {
    super()

    this.state = {loadState: "loading"}
  }

  componentDidMount = () => {
    this.setState({loadState: "loaded"})

    ReactGA.initialize('UA-116544151-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidUpdate = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={"site-wrapper " + this.state.loadState}>
          <Helmet
            title="zachdonsky.xyz"
            meta={[
              { name: 'name', content: 'zachdonsky.xyz' },
              { name: 'description', content: 'ZachDonsky.xyz is the digital portfolio of Zachary Donsky' },
              { name: 'keywords', content: 'Zachary Donsky, design, Industrial Design, Web, development, frontend, electronics, arduino, homelessness, Chalmers, ChalmersCards, Chalmers Cards' },
              { name: 'image', content: "/images/og.png" }
            ]}
          >
            <html lang="en" />

            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#ff4d00" />
            <meta name="msapplication-TileColor" content="#fff9aa" />
            <meta name="theme-color" content="#fff9aa" />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="zachdonsky.xyz" />
            <meta property="og:title" content="zachdonsky.xyz" />
            <meta property="og:description" content="ZachDonsky Portfolio" />
            <meta property="og:image" content="https://www.zachdonsky.xyz/images/og.png" />
            <meta property="og:url" content={"https://www.zachdonsky.xyz" + this.props.location.pathname} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="zachdonsky.xyz" />
            <meta name="twitter:description" content="zachdonsky.xyz is the digital playground of Eduardo Nunes. Full-time graphic designer, part-time noise maker. Head of Design at Stockholm-based Kollegorna." />
            <meta name="twitter:image:src" content="https://www.zachdonsky.xyz/images/og.png" />
            <meta name="twitter:site" content="@emmnunes" />
            <meta name="twitter:creator" content="@emmnunes" />

          </Helmet>

          <Header headerSize={inRegexArray(this.props.location.pathname, largeHeaderPages) ? 'large' : 'small'} />

          <div>{this.props.children}</div>

          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default TemplateWrapper

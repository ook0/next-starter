import App, { Container } from 'next/app'
import Head from 'next/head';
import Router from 'next/router';
// Components
import Header from '../components/Header';
// styles
import '../static/style/App.scss'

export default class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  componentDidMount = async () => {
    Router.beforePopState(({as}) => {
      location.href = as;
    });
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </Container>
    )
  }
}
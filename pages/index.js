import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mike Wilen | Real State</title>
        <meta name="description" content="Mike Wilen Real State" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <section className='about-header mb-5'>
          <Container>
            <Row>
              <Col md={6} className="p-0">
                <div className='video-container'>
                  <img src='/leadership1.jpeg' className='w-100 h-100' />
                </div>
              </Col>
              <Col md={6} className="p-0">
                <div className='video-container'>
                  <img src='/leadership2.jpeg' className='w-100 h-100' />
                </div>
              </Col>
              <Col md={6} className="p-0">
                <div className='video-container'>
                  <img src='/remote38.jpeg' className='w-100 h-100' />
                </div>
              </Col>
              <Col md={6} className="p-0">
                <div className='video-container'>
                  <img src='/remote40.jpeg' className='w-100 h-100' />
                </div>
              </Col>
            </Row>

          </Container>
        </section>

        <section className='experiences'>
          <Container>
            <div>
              <h1 className='main-heading'>
              A leader in the marketing and sale of real estate.
                {/* We build <br />stunning online <br />experiences */}
              </h1>
              <p className='main-description'>
              1MW is made up of highly skilled individual whose highest priority is 
              serving you. Say goodbye to the days when a real estate transaction was 
              time-consuming and exhausting! Instead, experience the 1MW difference.
              </p>
            </div>

            <div className='services-section'>
              <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                  <h2 className='service-heading'>
                  What We Do
                  </h2>
                  <Link href="/">
                  <a className='viewall-link'>
                    View all
                  </a>
                  </Link>
                </div>
                <Row>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                </Row>

              </div>
              <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                  <h2 className='service-heading'>
                    Design services
                  </h2>
                  <Link href="/">
                  <a className='viewall-link'>
                  View all design services
                  </a>
                 </Link>
                </div>
                <Row>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                </Row>

              </div>
              <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                  <h2 className='service-heading'>
                    Development services
                  </h2>
                  <Link href="/">
                  <a className='viewall-link'>
                  View all development services
                  </a>
                 </Link>
                </div>
                <Row>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4} sm={6}>
                    <div className='service-outer'>
                      <h4 className='service-title'>
                        Marketing Website
                      </h4>
                      <p className='service-description'>
                        We design and build fast marketing websites tailored to your brand
                      </p>
                    </div>
                  </Col>
                </Row>

              </div>

              <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline'>
                  <h2 className='service-heading'>
                    Clients
                  </h2>
                  <Link href="/">
                  <a className='viewall-link'>
                  View all
                  </a>
                 </Link>
                </div>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/zego.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                      <img src='/sendinblue.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                    <img src='/loop.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                    <img src='/exakt-health.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                    <img src='/vilobici.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                    <img src='/heavybit.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                    <img src='/blotout.svg' />
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6} className="mt-3">
                    <div className='client'>
                    <img src='/lak-gallery.svg' />
                    </div>
                  </Col>
                </Row>

              </div>

              <div className='service-section mt-5'>
                <div className='d-flex justify-content-between align-items-baseline'>
                  <h2 className='service-heading'>
                  Testimonials
                  </h2>
                  <Link href="/">
                  <a className='viewall-link'>
                  View all
                  </a>
                 </Link>
                </div>
                <Row>
                  <Col md={6} lg={6} sm={6} className="mt-3">
                    <div className='testimonial'>
                     <p className='testimonial-text'>
                     “Next level! Working with 1MW took all the stress from selling our home. 
                     I can’t speak highly enough of the service.” – A Satisfied Client
                      </p>
                    </div>
                  </Col>
                  <Col md={6} lg={6} sm={6} className="mt-3">
                    <div className='testimonial'>
                    <p className='testimonial-text'>
                     “Next level! Working with 1MW took all the stress from selling our home. 
                     I can’t speak highly enough of the service.” – A Satisfied Client
                      </p>
                    </div>
                  </Col>
                  
                </Row>

              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}

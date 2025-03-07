import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


var data = [
    {
      id: 1,
      image: require('../assets/images/blog1.jpg'),
      time: '15 Nov 2016',
      title: 'Coffee Lovers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/blog2.jpg'),
      time: '10 Nov 2016',
      title: 'Tips for UI Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/blog3.jpg'),
      time: '07 Nov 2016',
      title: 'Beautiful Day',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.twitter.com'
    }
  ]


function Blog() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Latest from blog</h2>
                    <div className="subtitle">get our latest news from blog</div>
                </div>
                <Row>
                    {data.map((v, i) => {
                        return (
                            <Col sm={4} key={v.id}>
                                <div className='holder'>
                                    <Card>
                                        <Card.Img variant="top" src={v.image} />
                                        <Card.Body>
                                            <time>{v.time}</time>
                                            <Card.Title>{v.title}</Card.Title>
                                            <Card.Text>
                                                {v.description}
                                            </Card.Text>
                                            <a href={v.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Blog;


import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

var data = [
    {
        id : 1,
        image : require('../assets/images/img-hero1.jpg'),
        title : "The perfect design for your website",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link: 'https://www.google.com'
    },
    {
        id : 2,
        image : require('../assets/images/img-hero2.jpg'),
        title : "Start Your Future Financial Plan",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link: 'https://www.facebook.com'
    },
    {
        id : 3,
        image : require('../assets/images/img-hero3.jpg'),
        title : "Enjoy the Difference   ",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link: 'https://www.instagram.com'
    },
]


function Slider()
{
    return(
        <section id="home" className="hero-block">
            <Carousel>
            {data.map((v,i) => {
                return(
                    <Carousel.Item>
                        <Image src={v.image} fluid />
                        <Carousel.Caption>
                            <h3>{v.title}</h3>
                            <p>{v.description}</p>
                            <a className="btn btn-primary" href={v.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
            </Carousel>
        </section>
    )
}

export default Slider;
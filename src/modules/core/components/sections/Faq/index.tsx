import Accordion from "../../Accordion/Index";
import faqBanner from '../../../../../../public/images/fag-banner.png';
import { Typography } from "../../typography";

const FAQPage = () => {
    const faqItems = [
        {
            title: 'Lorem ipsum dolor sit amet deleniti et doloribus?',
            content: 'Lorem ipsum dolor sit amet. Non recusandae quaerat aut voluptatem explicabo ea reiciendis numquam et molestiae adipisci aut ipsum eveniet sit accusantium rerum? Et nemo consequatur ut voluptatem distinctio ea nihil voluptatem aut saepe quam. At enim inventore non debitis minus id quod quam eum porro ipsam aut odit explicabo et quod culpa ut consectetur quia! .',
        },
        {
            title: 'Lorem ipsum dolor sit amet dolorem a earum quos?',
            content: 'Answer to question 2.',
        },
        {
            title: 'Lorem ipsum dolor sit amet. Non recusandae quaerat?',
            content: 'Answer to question 3.',
        },
        {
            title: 'Lorem ipsum dolor sit amet dolorem a earum quos?',
            content: 'Answer to question 3.',
        },
        {
            title: 'Lorem ipsum dolor sit amet distinctio vel nesciunt nulla cum quia ipsum?',
            content: 'Answer to question 3.',
        },
        {
            title: 'Lorem ipsum dolor sit amet cum quia ipsum?',
            content: 'Answer to question 3.',
        },
        {
            title: 'Lorem ipsum dolor sit amet distinctio vel nesciunt ipsum?',
            content: 'Answer to question 3.',
        },
    ];

    return (
        <section className='bg-cover bg-center object-cover object-center py-16 md:py-24 relative' style={{ backgroundImage: `url(${faqBanner.src})` }}>
            <div className="container md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto">
                <Typography Tag='h2' variant='title' className='mb-20 text-center'>
                    Frequently Asked Questions
                </Typography>
                <Accordion items={faqItems} />
            </div>
        </section>

    );
};

export default FAQPage;

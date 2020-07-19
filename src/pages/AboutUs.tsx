import React from 'react';
import Typography from '../components/Typography';
import Panel from '../components/Panel';
import Heading from '../components/Heading';

const AboutUs = () => {
  const Header = <Heading>About Us</Heading>;
  return (
    <>
      <Panel anchor="about-us" header={Header}>
        <Typography>
          Welcome from Sale Roofers, a leading roofer in Sale. With numerous
          years experience in the roofing industry, we provide all types of
          roofing services throughout Sale, Cheshire and Manchester, 24 hours
          per day, all year round. As roofers Sale can turn to in an emergency,
          please call us now on 0161 410 1973 for immediate assistance, or fill
          in the contact form on this page and someone from our experienced team
          will get back in touch with you ASAP.
        </Typography>
        <br />
        <Typography>
          We carry out various work for both commercial and domestic clients. No
          matter which type of property you require Sale Roofers to complete the
          work on, you can have confidence that we have already carried out the
          same job numerous times for other customers.
        </Typography>
      </Panel>
    </>
  );
};

export default AboutUs;

import React from 'react';
import Panel from '../components/Panel';
import Heading from '../components/Heading';
import Card from '../components/Card';

const Services = () => {
  const Header = <Heading>Services</Heading>;

  return (
    <Panel anchor="services" header={Header} rows>
      <Card heading="Flat Roofs" img="/flatroof.jpg">
        Two of the roofing services Sale Roofers offer are both the repairs and
        maintenance of flat roofs. This could be a temporary solution or a
        long-term option, depending on your situation. The first option would be
        to provide a quick fix to your flat roof that prevents any leaks on to
        your finest carpet or flooring, and the second option would be for a
        permanent solution; this could be good quality repairs or patches to an
        otherwise good-conditioned roof, or a completely new flat roof(depending
        on if the roof would be better being repaired or replaced).
      </Card>
      <Card heading="Roof Repairs" img="/roof.jpeg">
        There is never a "convenient" time for your roof to develop damage, but
        don't panic because if you need a roofing repairs company on call, Sale
        Roofers will be ready to help with any issues that arise; whether it is
        general wear-and-tear or a leaking roof from weather damage. As
        professional roofers in Sale, we will be happy to look at your property
        and give you sound advice on your damaged roof. We can also complete a
        full survey of your roof to help us uncover any underlying issues and
        will always aim to give you the best advice to ensure your property is
        safe. When it comes to weather and rain, there has not been a single
        roof leak repair Sale Roofers have come across and not been able to
        successfully help with...feel free to challenge us!
      </Card>
      <Card heading="Slate Roofs" img="/slate.jpeg">
        If you would like some of the most experienced slate roofers Sale have,
        look no further than our team who will be more than happy to help with
        all of your requirements. These types of roofs are a long-term option
        and also look great on the eye. Slate is made to last for many years due
        to it's durability, but aesthetically, the right choice can also really
        add some natural beauty to the roof of a property. Sale Roofers really
        appreciate the importance of both the safety and look of any roof, so we
        can ensure your needs are met with this.
      </Card>
      <Card heading="Tile Roofs" img="/tile.jpg">
        The reason that tiled roofs are the most common type of roofs that we
        come across are because they are able to to withstand the weather we
        experience in Sale and the UK! The roof tiling Sale Roofers carry out
        will ensure that your tiled roof will pass the test of time. Just choose
        your preferred colour - we are always happy to give our professional
        opinions - and our pros will ensure that you have a great end result
        that is pleasing on the eye.
      </Card>
      <Card heading="Chimney Repairs" img="/chimney.jpg">
        Having problems with your chimney and need someone to repair it? Sale
        Roofers will be on call and happy to help with any fixes that your
        chimney requires. It's something that in our experience, a lot of people
        delay getting repaired until it is too late...they then discover a bird
        has got into their damaged chimney, fell down and is sat behind their
        fire place trying to get out(we have seen it before with our own eyes!).
      </Card>
      <Card heading="Guttering" img="/gutter.jpg">
        Gutterin The source of any guttering issues could potentially be from a
        blockage or adverse weather conditions - we know that we sound like a
        broken record when it comes to weather damage, but it's very true! - so
        the gutter repairs Sale Roofers would carry out include cleaning up the
        current guttering and trying to avoid replacement where possible; if
        replacing is not an option, we can fit new gutters and downpipes as
        required.
      </Card>
      <Card heading="Facias and Soffits" img="/fascia.jpeg">
        Installing facias and soffits can really make your home look fresh and
        stylish, not to mention provide you with many maintenance-free years
        ahead. As a roofer Sale can depend on for help with all types of roof
        maintenance, we can replace and install these for you.
      </Card>
      <Card heading="Roof Windows" img="/roof.jpeg">
        Whether you already have a window in your roof or would like some
        installing, this is a great option to literally shed some light into
        your home, office or other type of work space; we can guarantee that you
        will have an aesthetically pleasing roof window afterwards, but being
        England, we can't promise it will be sunlight that it attracts!
      </Card>
    </Panel>
  );
};

export default Services;

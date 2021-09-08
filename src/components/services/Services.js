import React from 'react';
import { SectionServices, Item, ServiceIcon } from './ServiceStyles';
import { FaConnectdevelop } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { SiGooglesearchconsole, SiAdobeindesign } from 'react-icons/si';

const Services = () => {
  return (
    <SectionServices>
      <Item>
        <ServiceIcon>
          <FaConnectdevelop />
        </ServiceIcon>
        <p>WEB DEVELOPMENT</p>
      </Item>
      <Item>
        <ServiceIcon>
          <MdDeveloperMode />
        </ServiceIcon>
        <p>MOBILE/APP</p>
      </Item>

      <Item>
        <ServiceIcon>
          <SiAdobeindesign />
        </ServiceIcon>
        <p>GRAPHIC DESIGN</p>
      </Item>
      <Item>
        <ServiceIcon>
          <SiGooglesearchconsole />
        </ServiceIcon>
        <p>SEO</p>
      </Item>
    </SectionServices>
  );
};

export default Services;

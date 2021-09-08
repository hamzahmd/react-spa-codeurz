import { Para, H1, H3 } from '../../globalStyles';
import {
  Section1,
  Section3,
  Section2,
  Feed,
  List,
  FeedAboutIcon,
  ParaAbout,
} from './AboutStyles';
import { FaSuitcase, FaRegStar, FaRegHeart } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
const About = () => {
  return (
    <>
      <Section1>
        <H1>About US</H1>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          voluptate commodi dolore, facere fuga eveniet ut quasi nam hic?
          commodi dolore, facere Laboriosam.
        </Para>
      </Section1>
      <Section2>
        <Feed>
          <List>
            <FeedAboutIcon>
              <FaSuitcase />
            </FeedAboutIcon>
            <div>
              <H3>548</H3>
              <ParaAbout>PROJECTS COMPLETED</ParaAbout>
            </div>
          </List>
          <List>
            <FeedAboutIcon>
              <BiTimeFive />
            </FeedAboutIcon>
            <div>
              <H3>1465</H3>
              <ParaAbout>WORKING HOURS</ParaAbout>
            </div>
          </List>
          <List>
            <FeedAboutIcon>
              <FaRegStar />
            </FeedAboutIcon>
            <div>
              <H3>612</H3>
              <ParaAbout>POSITIVE FEEDBACKS</ParaAbout>
            </div>
          </List>
          <List>
            <FeedAboutIcon>
              <FaRegHeart />
            </FeedAboutIcon>
            <div>
              <H3>735</H3>
              <ParaAbout>HAPPY CLIENTS</ParaAbout>
            </div>
          </List>
        </Feed>
      </Section2>
      <Section3 />
    </>
  );
};

export default About;

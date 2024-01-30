import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleGroup,
  ToggleButton,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCard';
// import { projects } from '../../data/constants';

const Projects = () => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of the projects I have worked on throughout the years.
        </Desc>
        <ToggleGroup>
          {toggle === 'all' ? (
            <ToggleButton active value='all' onClick={() => setToggle('all')}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value='all' onClick={() => setToggle('all')}>
              ALL
            </ToggleButton>
          )}
        </ToggleGroup>
        <CardContainer>
          <ProjectCard
          // key={project.id}
          // project={project}
          // openModal={openModal}
          // setOpenModal={setOpenModal}
          />
          {/* {toggle === 'all' &&
            projects.map((project) => (
              
            ))} */}
          {/* {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))} */}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

Projects.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    project: PropTypes.object,
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects;

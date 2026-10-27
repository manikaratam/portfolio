import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faJava,
  faAngular
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCode,
  faServer,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import './skills.css';

const skillGroups = [
  {
    title: 'Current Professional Skills',
    subtitle: 'Skills I use in my professional work',
    icon: faDatabase,
    skills: [
      {
        name: 'Oracle SQL',
        icon: faDatabase,
        color: '#F97316',
        description:
          'Writing complex queries, joins, subqueries, analytical queries and database operations.'
      },
      {
        name: 'PL/SQL',
        icon: faCode,
        color: '#60A5FA',
        description:
          'Developing procedures, functions, packages, triggers and troubleshooting database issues.'
      }
    ]
  },
  {
    title: 'Backend Development',
    subtitle: 'Expanding my backend development capabilities',
    icon: faServer,
    skills: [
      {
        name: 'Core Java',
        icon: faJava,
        color: '#F97316',
        description:
          'Building a strong foundation in OOP, collections, exception handling and Java fundamentals.'
      },
      {
        name: 'Spring Boot',
        icon: faServer,
        color: '#4ADE80',
        description:
          'Learning to build REST APIs and structured backend applications.'
      },
      {
        name: 'JDBC',
        icon: faDatabase,
        color: '#93C5FD',
        description:
          'Learning Java database connectivity and integration with relational databases.'
      },
      {
        name: 'REST APIs',
        icon: faLayerGroup,
        color: '#C084FC',
        description:
          'Learning API design, HTTP methods, request handling and JSON data exchange.'
      }
    ]
  },
  {
    title: 'Frontend Development',
    subtitle: 'Building interactive and responsive user interfaces',
    icon: faLayerGroup,
    skills: [
      {
        name: 'HTML5',
        icon: faHtml5,
        color: '#FB923C',
        description:
          'Structuring web pages with semantic HTML and accessible markup.'
      },
      {
        name: 'CSS3',
        icon: faCss3Alt,
        color: '#60A5FA',
        description:
          'Styling responsive layouts, components, animations and page designs.'
      },
      {
        name: 'JavaScript',
        icon: faJs,
        color: '#FACC15',
        description:
          'Learning modern JavaScript, functions, asynchronous code and DOM concepts.'
      },
      {
        name: 'React',
        icon: faReact,
        color: '#67E8F9',
        description:
          'Building component-based interfaces with reusable UI elements.'
      },
      {
        name: 'Angular',
        icon: faAngular,
        color: '#F87171',
        description:
          'Learning components, services, routing, forms and API integration.'
      }
    ]
  }
];

function Skills() {
  return (
    <Container fluid id="skills" className="skills-section">
      <Container>
        <div className="skills-heading">
          <span className="skills-eyebrow">MY TECHNICAL TOOLKIT</span>
          <h2>
            Skills &amp; <span>Technologies</span>
          </h2>
          <p>
            Leveraging my database development experience while continuously
            upgrading my skills in Java backend development and modern frontend
            technologies.
          </p>
        </div>

        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title}>
            <div className="skill-group-heading">
              <div className="skill-group-icon">
                <FontAwesomeIcon icon={group.icon} />
              </div>

              <div>
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
              </div>
            </div>

            <Row className="g-4">
              {group.skills.map((skill) => (
                <Col
                  key={skill.name}
                  xs={12}
                  sm={6}
                  lg={4}
                >
                  <article className="skill-card">
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      <FontAwesomeIcon icon={skill.icon} />
                    </div>

                    <h4>{skill.name}</h4>
                    <p>{skill.description}</p>
                  </article>
                </Col>
              ))}
            </Row>
          </section>
        ))}
      </Container>
    </Container>
  );
}

export default Skills;
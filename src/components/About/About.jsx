import {WrapperPage} from '../WrapperPage/WrapperPage';

export const About = () => (
  <WrapperPage>
    <section className="about container">
      <h2 className="about__title">
        My name is Stanislav.
      </h2>

      <h3 className="about__sub-title">I am a Front-End Developer</h3>

      <p className="about__text">
        Experienced Front-End Developer with 3 years of dedicated web development expertise.
        I have a demonstrated history of successfully leading impactful projects
        and delivering efficient, user-friendly web applications.
        My skill set includes proficiency in TypeScript, React,
        Redux Toolkit and CSS, making me well-equipped to tackle a
        variety of front-end development challenges.
      </p>

      <h3 className="about__sub-title">Skills</h3>

      <ul className="about__list">
        <li className="about__list-item">
          HTML, CSS (SASS,SCSS).
        </li>

        <li className="about__list-item">
          JavaScript, TypeScript, React, Next.js, React Hook Form, React Query, Jquery.
        </li>

        <li className="about__list-item">
          Redux, Redux toolkit.
        </li>

        <li className="about__list-item">
          Rest API GraphQl, Apollo.
        </li>

        <li className="about__list-item">
          Tailwind Css, Bootstrap, Materialize.
        </li>

        <li className="about__list-item">
          Gulp, Webpack.
        </li>

        <li className="about__list-item">
          Jira, Confluence
        </li>
      </ul>

    </section>
  </WrapperPage>
);

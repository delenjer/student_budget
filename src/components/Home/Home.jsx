import {WrapperPage} from '../WrapperPage/WrapperPage';
import {Link} from 'react-router-dom';
import {PageRouters} from '../../routers';

export const Home = () => (
  <WrapperPage>
    <div className="about-product">
      <div className="about-product__wrap">
        <section className="about-product__content">
          <h1 className="about-product__title">Go for your dream</h1>

          <p className="about-product__text">
            Hi! This is a wallet app that will help you save money.
            It's very simple, follow the link and start keeping statistics.
          </p>

          <div className="about-product__min-title">What we used:</div>

          <ul className="about-product__list">
            <li className="about-product__list-item">React js</li>
            <li className="about-product__list-item">Mobx</li>
            <li className="about-product__list-item">React Hook Form</li>
            <li className="about-product__list-item">React Router Dom</li>
            <li className="about-product__list-item">Scss</li>
            <li className="about-product__list-item">Css modules</li>
          </ul>
        </section>

        <Link
          to={PageRouters.Reporting}
          className="about-product__link"
        >
          <span className="about-product__link-content">Get started for free</span>
          <span className="about-product__link-overlay"></span>
        </Link>
      </div>

      <div className="about-product__img-box">
        <img className="about-product__img" src="./images/img.jpeg" alt="Image"/>
      </div>
    </div>
  </WrapperPage>
)

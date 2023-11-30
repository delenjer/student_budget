import {useEffect, useState} from 'react';

import {ReportingForm} from './ReportingForm/ReportingForm';
import {WrapperPage} from '../WrapperPage/WrapperPage';
import {SuccessBox} from './SuccessBox/SuccessBox';
import {getMonth} from '../../utils/helper';

export const Reporting = () => {
  const [show, setShow] = useState(false);
  const { currMonth } = getMonth();

  useEffect(() => {
    setTimeout(() => setShow(false), 1500);
  }, [show]);

  return (
    <WrapperPage>
      <div className="reporting">
        <div className="reporting__form-container">
          {
            show ? (
              <SuccessBox />
            ) : (
              <ReportingForm
                currMonth={currMonth}
                setShow={setShow}
              />
            )
          }
        </div>

        <div className="reporting-wrap">
          <img className="reporting-wrap__img" src="./images/img.jpeg" alt="Image"/>
        </div>
      </div>
    </WrapperPage>
  )
}

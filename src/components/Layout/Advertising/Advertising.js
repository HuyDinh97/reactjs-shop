import Ads_1 from './picture/offer-banner-1.jpg';
import Ads_2 from './picture/offer-banner-2.jpg';
import Ads_3 from './picture/offer-banner-3.jpg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './Advertising.module.css';


function Advertising() {
  return (
    <Row className={classes.mg_2}>
      <Col><img src={Ads_1} alt='ADS' /></Col>
      <Col><img src={Ads_2} alt='ADS' /></Col>
      <Col><img src={Ads_3} alt='ADS' /></Col>
    </Row>
  )
}

export default Advertising;
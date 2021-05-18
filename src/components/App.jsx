import Header from './layout/Header';
import ViewContainer from './views/ViewContainer';
//import Footer from './layout/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/styles.scss';
import { StateProvider } from '../context/state';

const App = () => {
  return (
    <Container fluid>
      <Row id="content_wrap">
        <StateProvider>
          <Col xs={12} xl={7}>
            <Header />
            <ViewContainer />
          </Col>
        </StateProvider>
      </Row>
    </Container>
  );
}

export default App;
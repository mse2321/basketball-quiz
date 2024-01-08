import Header from './layout/Header';
import ViewContainer from './views/ViewContainer';
//import Footer from './layout/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { StateProvider } from '../context/state';

const App = () => {
  return (
    <Container fluid>
      <Row id="content_wrap">
        <StateProvider>
          <Col xs={12} md={12} lg={12} xl={12}>
            <Header />
            <ViewContainer />
          </Col>
        </StateProvider>
      </Row>
    </Container>
  );
}

export default App;
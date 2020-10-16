import React from 'react';

import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';

const Movies = () => (
  <div>
    <h4 className="mt-3">Bandes Annonces</h4>
    <Row>
      <Col>
        <Card>
          <Card.Img src="https://lh3.googleusercontent.com/proxy/3FDWyQlBJbXvcIfnVTEjtHC7nhzOoxchEcizW01hN3Ge_OMDvfMpU_Xb4AFL-g0uImT8frEBIljW2DPP1wjzZnTyWojWO7A3o7ZjogU_UtdgxXna237Rr0fDtMkJR_4kr87CeXsP43pz02bJ" />
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/71RIznEEyRL._AC_SY679_.jpg" />
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img src="https://www.aetherium.fr/wpa/wp-content/uploads/2019/08/aetherium-semio-batman-affiche-2.jpg" />
        </Card>
      </Col>
      <Col />
    </Row>
  </div>
);

export default Movies;

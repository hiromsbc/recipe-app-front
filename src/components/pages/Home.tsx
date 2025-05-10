import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => (
    <Container className="py-4">
        <Row className="g-4">
            <Col md={4}>
                <Card className="h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>ランキング</Card.Title>
                        <Card.Text>
                            アクセス上位のレシピを表示
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>新着</Card.Title>
                        <Card.Text>
                            新着順にレシピを表示
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>レシピ検索</Card.Title>
                        <Card.Text>
                            レシピ情報を検索
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Home;

import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
    <Container className="py-4">
        <Row className="g-4">
            <Col md={4}>
                <Link to="/ranking" className="text-decoration-none">
                    <Card className="h-100 shadow-sm hover-card">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>ランキング</Card.Title>
                            <Card.Text>
                                アクセス上位のレシピを表示
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col md={4}>
                <Link to="/new" className="text-decoration-none">
                    <Card className="h-100 shadow-sm hover-card">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>新着</Card.Title>
                            <Card.Text>
                                新着順にレシピを表示
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col md={4}>
                <Link to="/search" className="text-decoration-none">
                    <Card className="h-100 shadow-sm hover-card">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>レシピ検索</Card.Title>
                            <Card.Text>
                                レシピ情報を検索
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </Row>
    </Container>
);

export default Home;

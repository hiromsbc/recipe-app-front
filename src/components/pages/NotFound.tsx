import { Container, Row } from 'react-bootstrap';

const NotFound = () => {

    return (
        <Container className="py-4">
            <Row>
                Not Found
            </Row>
            <Row>
                そのページは存在しません。
            </Row>
        </Container>
    );
};

export default NotFound;

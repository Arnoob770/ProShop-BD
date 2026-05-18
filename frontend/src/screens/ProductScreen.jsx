import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import product from "../products"

const ProductScreen = () => {
    const { id: productId } = useParams()
    const selectedProduct = product.find(p => p._id === productId);
    console.log(selectedProduct);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">Go Back </Link>
        <Row>
            <Col md={5}>
                <Image src={selectedProduct.image} alt={selectedProduct.name} fluid />

            </Col>
            <Col md={4}> 
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{selectedProduct.name}</h3>   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={selectedProduct.rating} text={`${selectedProduct.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${selectedProduct.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {selectedProduct.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${selectedProduct.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{selectedProduct.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={selectedProduct.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

            </Col>
        </Row>
      </>
  )
}

export default ProductScreen

import FlatList from 'flatlist-react';
import boxLogo from './utils/open-box-2.png';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './App.css';

const UserList = (props) => {

    const { data, removeUser } = props;

    const renderUser = (user, idx) => {
        return (
            <div className='card_' key={idx} >
                <Card className="user-card">
                    <Card.Header>
                        <Row>
                            <Col>
                                <h5>{user.fullName}</h5>
                            </Col>
                            <Col />
                            <Col style={{ flexDirection: "row-reverse", display: "flex" }}>
                                <Button sm variant="outline-secondary" onClick={() => removeUser(idx)}>
                                    X
                                </Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><Card.Text>Birthday: <h6 style={{ display: "inline" }}>{user.birthday}</h6> </Card.Text></Col>
                            <Col><Card.Text> From: <h6 style={{ display: "inline" }}>{user.country}</h6> </Card.Text></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    const blank = () => (
        <div className='empty-list'>
            <h4 className="h4-custom">There aren't registered users yet!</h4>
            <img alt="" src={boxLogo} width="100rem" height="100rem" className="box-fade" />
        </div>
    );

    return (
        <div>
            <h2 className="h2-custom">Registered Users</h2>
            <hr />
            <FlatList
                list={data}
                renderItem={renderUser}
                renderWhenEmpty={blank}
                sortBy={["fullName", { descending: true }]}
            />
        </div>
    )

}

export default UserList;

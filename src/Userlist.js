import FlatList from 'flatlist-react';
import boxLogo from './utils/open-box.png';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

const UserList = (props) => {

    const { data } = props;

    const renderUser = (user, idx) => {
        return (
            <div className='user-card' key={idx} >
                <Card border="light" style={{ width: 'auto' }}>
                    <Card.Header>{user.fullName}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><Card.Text>Birthday: {user.birthday} </Card.Text></Col>
                            <Col><Card.Text> From: {user.country} </Card.Text></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    const blank = () => (
        <div className='empty-list'>
            <h4 style={{ color: '#bfc3c7', paddingBottom: '4%', }}>There aren't registered users yet!</h4>
            <img alt="" src={boxLogo} width="100rem" height="100rem" />
        </div>
    );
    // className="App-logo"
    return (
        <div>
            <h2>Registered Users</h2>
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

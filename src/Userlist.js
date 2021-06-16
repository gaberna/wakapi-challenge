import FlatList from 'flatlist-react';
import boxLogo from './utils/open-box.png';
import Card from 'react-bootstrap/Card';
import './App.css';

const UserList = (props) => {

    const { data } = props;

    const renderUser = (user, idx) => {
        return (
            <div style={{ padding: '0.5rem' }} key={idx} >
                <Card border="light" style={{ width: 'auto' }}>
                    <Card.Header>{user.fullName} {user.country} </Card.Header>
                    <Card.Body>
                        <Card.Title>Birthday: {user.birthday}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    const blank = () => (
        <div className='empty-list'>
            <h4>There aren't registered users yet!</h4>
            <img alt="" src={boxLogo} width="32" height="32" />

        </div>
    );
    // className="App-logo"
    return (
        <div>
            <h1>Registered Users</h1>
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

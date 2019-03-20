import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { history } from '../Router/AppRouter';
import axios from 'axios';
class Home extends Component {
    state = {}
    onNewTask = () => {
        axios.get('http://localhost:3001/createTask/')
            .then((res) => {
                history.push(`/task/${res.data._id}`);
            })
    }
    render() {
        return (
            <div>
                <h1>This is Home!</h1>
                {
                    this.props.user.id
                    &&
                    (<Button onClick={this.onNewTask}>
                        New Task
                    </Button>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.auth
})

export default connect(mapStateToProps)(Home);
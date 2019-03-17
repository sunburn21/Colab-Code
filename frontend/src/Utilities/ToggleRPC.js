import { Component } from 'react';

export default class Toggle extends Component {
    state = {
        on: false
    }

    onButtonClick = () => {
        this.setState((state) => ({
            on: !state.on
        }));
    }
    render() {
        console.log(this.state.on);
        const { children } = this.props;
        return children({ on: this.state.on, onToggle: this.onButtonClick });
    }
}
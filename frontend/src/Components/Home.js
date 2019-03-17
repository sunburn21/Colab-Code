import React, { Fragment } from 'react'
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
const Home = () => {
    return (
        <div><h1>You are already home;</h1>
            <Toggle>
                {({ on, onToggle }) => (
                    <Fragment>
                        <button onClick={onToggle}>
                            CLICKME!
                        </button>
                        <Modal on={on} onToggle={onToggle}>
                            <h1>HIIIIIIIIIII</h1>
                        </Modal>
                    </Fragment>
                )}
            </Toggle>
        </div>
    )
}

export default Home;
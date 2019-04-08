import React, {Component} from 'react';
import Modal from 'react-modal';

class Model extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentWillMount() {

        Modal.setAppElement('body')
    }


    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleOpenModal}>open</button>
                <Modal isOpen={this.state.showModal} contentLabel="Simple Modal" ariaHideApp={false}>
                    <div className="container">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Username" value="" id="name"
                                               type="text" className="active validate" required/>
                                        <label htmlFor="name">Username</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type="button" onClick={this.handleCloseModal}>Close</button>
                </Modal>
            </div>
        );
    }
}

export default Model;
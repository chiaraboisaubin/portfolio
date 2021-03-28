import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
          <React.Fragment>
        <h3 className="secondary-header">graphic work </h3>

        <div className="illustraiton-container">

            <div className="graphic-work-conaitner">
            <div className="graphic-design-1">
            </div>

        <input type="button" value="illustation for Ink Tank " onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="graphic-container">
                      <img src="https://i.ibb.co/zXVsmmL/design-for-website1.jpg" width="300px" height="auto"/>
                        <h1>Geometry design </h1>
                        <p>2017</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}></a>
                    </div>

                </Modal>
            </div>
        
            
            <div className="graphic-work-conaitner">

            <div className="graphic-design-2">
            </div>

        <input type="button" value="illustation for Ink Tank " onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="graphic-container">
                      <img src="https://i.ibb.co/X7HnD7B/little-tea-cup-2.jpg" width="300px" height="auto"/>
                        <h1>Num Nom tea ad </h1>
                        <p>2017</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}></a>
                    </div>

                </Modal>
            </div>

            <section className="graphic-work-conaitner">

            <div className="graphic-design-3">
            </div>

        <input type="button" value="illustation for Ink Tank " onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="graphic-container">
                      <img src="https://i.ibb.co/MNyQ4gg/mountains.jpg" width="300px" height="auto"/>
                        <h1>Geometric mountains </h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}></a>
                    </div>

                </Modal>
            </section>

            <section className="graphic-work-conaitner">
              
            <div className="graphic-design-4">
            </div>
        <input type="button" value="illustation for Ink Tank " onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="graphic-container">
                      <img src="https://i.ibb.co/PQxrFjk/logo2-copy.jpg" width="300px" height="auto"/>
                        <h1>Personal logo </h1>
                        <p>2013</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}></a>
                    </div>

                </Modal>
            </section>

            <section className="graphic-work-conaitner">

            <div className="graphic-design-5">
            </div>
            
        <input type="button" value="illustation for Ink Tank " onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="graphic-container">
                      <img src="https://i.ibb.co/7JLjz4m/wolfie.jpg"/>
                        <h1>Geometric wolf</h1>
                        <p>2016</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}></a>
                    </div>

                </Modal>
            </section>
            </div>
      
            </React.Fragment>
        );
    }
}
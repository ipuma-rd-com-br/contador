import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './contador.css';

class Contador extends Component {

    state = {
        numero: 10
    }

    incrementar = ()=> {
        this.setState(
            {numero: this.state.numero + 1}
        );
    }

    decrementar = ()=> {
        if (this.state.numero === 0) {
            return alert("Hoje não, Faro!");
        }
        this.setState(
            {numero: this.state.numero - 1}
        );
    }

    render() {
        return (
            <div>
                <h1 className="contador-titulo">{this.state.numero}</h1>
                <Button className="mr-2" color="success" outline onClick={this.incrementar}>++</Button>
                <Button color="danger" outline onClick={this.decrementar}>--</Button>
            </div>
        );
    }

}

export default Contador;
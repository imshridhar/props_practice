import React,{Component} from "react";
import styled from 'styled-components'

const Main =styled.div`
text-align: center;
`
const Input =styled.input`
    
`
const DisplayH1 = styled.h1`
    text-align: center;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Shridhar',
            lname: 'Havinal',
        };
    }

    componentDidMount() {
        document.title = this.state.name + ' ' + this.state.lname;
    }

    componentDidUpdate() {
        document.title = this.state.name + ' ' + this.state.lname;
    }

    NameS = (a) => {
        this.setState({ name: a.target.value });
    }

    LNameS = (b) => {
        this.setState({ lname: b.target.value });
    }

    render() {
        return (
            <>
                <Main>
                    <Shri label="Name">
                        <Input value={this.state.name} onChange={this.NameS} placeholder='Enter Your First Name'/>
                    </Shri>
                    <Shri label="LastName" >
                        <Input value={this.state.lname} onChange={this.LNameS} placeholder='Enter Your Last Name'/>
                    </Shri>
                </Main>

                <DisplayH1>Namasthe , {this.state.name + " " + this.state.lname}</DisplayH1>
            </>
        );
    }
}

class Shri extends Component {
    render() {
        const { label, children} = this.props;
        return (
            <>
                <label>{label}<br/></label>
                {children}
                <hr/>
            </>
        );
    }
}

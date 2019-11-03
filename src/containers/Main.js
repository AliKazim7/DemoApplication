import React, { Component } from 'react';
import {Table } from 'reactstrap'
import { 
    Container,
	Row, Col, 
	Card,
	// CardHeader, 
	CardBody, 
    Button,
    CardFooter,
    CardHeader,
	FormInput,
	ModalHeader,
	ModalBody,
	// ModalFooter,
	FormSelect,
	FormFeedback
} from "shards-react";
import { connect } from 'react-redux'
import { getUsers } from '../actions';
import './Main.css'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    handleClick(){
        this.props.getuser()
    }

    showUsers(){
        const { Users } = this.props
        return(
            <table id="myTable" className=" table mb-0 p-3 mt-4">
                <thead className="bg-light">
                    <tr className="text-capitalize">
                        <th scope="col" className="border-0">
                            ID
                        </th>
                        <th scope="col" className="border-0">
                            Name
                        </th>
                        <th scope="col" className="border-0">
                            Email
                        </th>
                        <th scope="col" className="border-0">
                            Phone
                        </th>
                        <th scope="col" className="border-0">
                            Website
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-light mt-4">
                    {
                        Users
                        ?
                        Users.map((item,index)=>(
                            <tr key={index}>
                                <td style={{verticalAlign:'middle', background:'white'}}>
                                {item.id}
                                </td>
                                <td style={{verticalAlign:'middle', background:'white'}}>
                                {item.name}
                                </td>
                                <td style={{verticalAlign:'middle', background:'white'}}>
                                {item.email}
                                </td>
                                <td style={{verticalAlign:'middle', background:'white'}}>
                                {item.phone}
                                </td>
                                <td style={{verticalAlign:'middle', background:'white'}}>
                                {item.website}
                                </td>
                            </tr>
                        ))
                        :
                        null
                    }
                </tbody>
            </table>
        )
    }

    render() {
        const { Users} = this.props;
        console.log('users', Users)
        return (
            <Container fluid className="main-content-container px-4">
					<div> 
					<Row className="mt-2 mb-2">
						<Col>
							<Card small className="m-2">
								<CardBody >
									{this.showUsers()}
                                </CardBody>
                                <CardFooter>
                                    <Button style={{background:'greenYellow', size:'40px', marginTop:'20px'}} onClick={() => this.handleClick()} >Get User</Button>
                                </CardFooter>
							</Card>
						</Col>
					</Row>
						
					</div>
			</Container>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        getuser: () => dispatch(getUsers())
    }
}

function mapStateToProps(state){
    return{
        Users: state.json
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
import React, { Component } from 'react';
import {Table } from 'reactstrap'
import { 
    Container,
	Row, Col, 
	Card, 
	CardBody, 
    Button,
    CardFooter,
    CardHeader,
} from "shards-react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';
import { connect } from 'react-redux'
import { getUsers, getPostData } from '../actions';
// import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    handleClick(){
        this.props.getuser()
    }

    componentDidMount() {
        this.props.getPost()
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

    showpost(){
        const { Posts } = this.props
        return(
           <div>
           <h1 style={{textAlign:'center'}} >Daily Post</h1>
           {
            Posts 
            ? Posts.map((item, index)=>(
                <Card key={index} style={{marginTop:'10px', marginBottom:'20px', marginLeft:'40px'}} >
                <CardHeader>
                    <h3>{item.title}</h3>
                </CardHeader>
                <CardBody className="text-justify text-capitalize" style={{ marginBottom:'5px'}}>
                    <h5>
                    {item.body}</h5>
                </CardBody>
                </Card>
            ))
            :
            null
        }
           </div>
        )
    }

    render() {
        const { Users} = this.props;
        console.log('users', Users)
        return (
            <Container fluid>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Post Servers</NavbarBrand>
        <NavbarToggler  />
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
					<div> 
                        {this.showpost()}
                    </div>
			</Container>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        getuser: () => dispatch(getUsers()),
        getPost: () => dispatch(getPostData())
    }
}

function mapStateToProps(state){
    console.log('state',state)
    return{
        Users: state.json,
        Posts: state.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

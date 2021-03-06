import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {

    state={
        beers: []
    }

    displayBeers = () =>{
        let list = this.state.beers.map((beer , index) =>{
            return (
                <div key = {index} className ='col-lg-3'>
                    <img src ={beer.img_url} alt = "beer" className='beerImg'></img>
                    <h4>{beer.name}</h4>
                    <h5>{beer.tagline}</h5>
                    <p>Created by: {beer.contributed_by}</p>
                </div>)
        })
        return list
    }

    componentDidMount(){
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(res => {
            this.setState({
                beers: res.data
            })
        })
    }
    render(){
        return(
            <div className="container">
                <div className ="row">
                    {this.displayBeers()}
                </div>
            </div>
        )
    }
}

export default AllBeers


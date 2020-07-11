import React, { Component } from 'react';
import './borderRadiusgeneration.css'

export default class borderRadiusGeneration extends Component {

    constructor(props) {
        super(props); //pegando as propriedades

        this.state = {
            topLeft: 0, 
            topRight: 0, 
            bottomRight: 0, 
            bottomLeft: 0,
            all:0,
        }
        //this.mudatopLeft = this.mudatopLeft.bind(this); //passando o objeto this para ele poder ser acessado pela função mudaTopLeft
    }
    
    


    render(){
     

        const box ={
            margin: 'auto',
            backgroundImage: 'linear-gradient(to top, #a100e0, #f04313)',
            width:'25%',
            paddingTop: '25%',
            border: 'solid 3px white', 
            borderTopLeftRadius: `${this.state.topLeft}` + 'px',
            borderTopRightRadius: `${this.state.topRight}` + 'px',
            borderBottomRightRadius: `${this.state.bottomRight}` + 'px',
            borderBottomLeftRadius: `${this.state.bottomLeft}` + 'px',
            borderRadius:`${this.state.all}` + 'px'
        };  

        

        return( //Cada componente retorna só uma div
            <div className="borderRadiusGeneration">
                <h1> Border Radius Generation </h1>
                
                <div className="container"> 
                    <input type="number" onChange={(event)=>{this.setState({topLeft:event.target.value})}}/>
                    <input type="number" onChange={(event)=>{this.setState({topRight:event.target.value})}}/>
                </div>

                <div style={box}> </div>

                <div className="container">
                     <input type="number" onChange={(event)=>{this.setState({bottomLeft:event.target.value})}}/>
                     <input type="number" onChange={(event)=>{this.setState({bottomRight:event.target.value})}}/>
                </div>

                <div className="codigo">
                    <h4>border-radius: {this.state.topLeft}px {this.state.topRight}px {this.state.bottomRight}px {this.state.bottomLeft}px</h4>
                </div>
            </div>
        )
    }
}
import React from 'react';



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            in: 'Insert the color!!!',
            inS: 'Insert the size (500px)!!!',
            bg: 'red',
            fr: '100%',
            h: '500px',
            w: '500px',
            isChecked: true,
        }; 
        this.inChangeForm = this.inChangeForm.bind(this)
    }

    changeColor = (color) => {
        this.setState({
            bg: color,
        
        });
    }

    inChangeColor = (e) => {

        this.setState({
            in: e.target.value,
           
        });
    }

    inChange = (e) => {

        this.setState({
            in: e.target.value,
            bg: e.target.value,
           
        });
    }

    inChangeForm = () => {
        this.setState(state => {
            let radius;
            if (state.fr == '100%'){
                radius = '0%'
            }
            else if(state.fr == '0%'){
                radius = '100%'
            }
            return (
                {fr: radius}
            )           
        });
 
    }
    inChangeSize = (e) => {

        this.setState({
            inS: e.target.value,
            h: e.target.value,
            w: e.target.value,
           
        });
    }

    render() {
        return (
        <div className="rutulys" style={{backgroundColor: this.state.bg, borderRadius: this.state.fr, height: this.state.h, width: this.state.w} }>
            <input className="inputColor" type="text" value={this.state.in} onChange={this.inChange}/>
            <input className="inputSize" type="text" value={this.state.inS} onChange={this.inChangeSize}/>
            <input className="checkBox" type="checkbox" defaultunchecked={this.state.fr}  onChange={this.inChangeForm}/>
        </div>
    )
}
}   
export default App;
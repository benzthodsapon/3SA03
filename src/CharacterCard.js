import React from 'react';
 
class CharacterCard extends React.Component {
 
    state = {
        active: false
    }
 
    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
        this.setState({active: false})
        }
       }
    activate = () => {
        if(this.state.active==false){
        this.setState({active: !this.state.active});
        this.props.activationHandler(this.props.value);}
    }
 
    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}
 
export default CharacterCard;

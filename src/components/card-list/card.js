import { Component } from "react";

class Card extends Component {
    render() {
        const { name, id, email } = this.props.monster
        return (
            <div className="card-container">
                <img alt={`monster  ${name}`} src={`https://robohash.org/${id}?set=set2&size=200x200`}></img>
                <h2 key={id}>{ name }</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card
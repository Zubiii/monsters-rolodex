import Card from "./card";

const CardList = (props) => {
    const { monsters } = props;
    return (
        <div className="card-list">
            {
                monsters.map(monster => {
                    return (
                        <Card monster={monster} />
                    )
                })
            }
        </div>
    )
}

export default CardList 
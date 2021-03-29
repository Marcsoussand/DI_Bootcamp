

const PlayersOnField = (props) => {

    let { playersName } = props;
    var position = '';
    return (
        <>

            <ul>
                {playersName.map((item, i) => {
                    switch (item[1]) {
                        case 1:
                            position = 'G'
                            break;
                        case 2:
                            position = 'D';
                            break;
                        case 3:
                            position = 'M';
                            break;
                        case 4:
                            position = 'F';
                            break;
                        default:
                            break;
                    };


                    return <li key={i}>{item[0]} {position} </li>
                })}
            </ul>
        </>
    )

}

export default PlayersOnField
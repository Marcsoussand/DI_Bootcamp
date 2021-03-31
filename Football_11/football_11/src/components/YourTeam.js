

const YourTeam = (props) => {

    let { playersName,visibilityStatus } = props;
    var position = '';
    return (
        <>
            
            <ul style={{visibility:visibilityStatus}} id='playersOnField1'>
                Players 
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


                    return <li key={i}>{position} {item[0]} </li>
                })}
            </ul>
        </>
    )

}

export default YourTeam
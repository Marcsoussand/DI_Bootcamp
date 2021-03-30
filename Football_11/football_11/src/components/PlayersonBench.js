

const PlayersOnBench = (props) => {

    let {benchName} = props;
    var position = '';

    return (
        <>
    
        <ul> Other Players Available
            {benchName.map((item,i) => {
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
    
                return <li key={i}>{position} {item[0]}</li>})}
        </ul>
        </>
    )
    
}

export default PlayersOnBench
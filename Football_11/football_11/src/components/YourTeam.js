

const YourTeam = (props) => {

    let { playersName,visibilityStatus } = props;
    var position = '';

    const nameInput = (i) => {
    return ("input"+i)}

//     const setPlayer= (i,t) =>{
// playersName[i]=t;
// console.log(playersName);
//     }

    return (
        <>
            
            <ul style={{visibility:'visible'}} id='playersOnField1'>
                Players 
                {playersName.map((item, i) => {
                    // switch (item[1]) {
                    //     case 1:
                    //         position = 'G'
                    //         break;
                    //     case 2:
                    //         position = 'D';
                    //         break;
                    //     case 3:
                    //         position = 'M';
                    //         break;
                    //     case 4:
                    //         position = 'F';
                    //         break;
                    //     default:
                    //         break;
                    // };


                    return <li key={i}>{position}<input type="text" className='inputPlayers' id={nameInput(i)} onChange={(event) =>setPlayer(i,event.target.value)} /> </li>
                })}
            </ul>
        </>
    )

}

export default YourTeam
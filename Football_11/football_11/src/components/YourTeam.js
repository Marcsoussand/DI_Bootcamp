

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
                <h3 style={{textAlign:"center",color:"gold"}} >Players </h3>
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


                    return <li key={i} className='playerListDesign'>{position}<div>Player {i+1}</div><input type="text" className='inputPlayers' id={nameInput(i)} /> </li>
                })}
            </ul>
        </>
    )

}

export default YourTeam
import Card from './Card';


const CardList = (props) => {
  const {robots} = props;
  return (
    <div className='tc'>
    {
      robots.map((item, i) => {
        return <Card robot={item} key={i}/>
      })
    }
    </div>
  );
}
export default CardList

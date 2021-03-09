import Card from './Card';


const CardList = (props) => {
  const {robots,getPosts} = props;
  return (
    <div className='tc'>
    {
      robots.map((item, i) => {
        return <Card robot={item} key={i} getPosts={getPosts}/>
      })
    }
    </div>
  );
}
export default CardList

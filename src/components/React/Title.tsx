import Titles from '../../data/Titles';

const Title = () => {

  // const getRandomIndex = () => {
  //   let index = Math.floor( Math.random() * Titles.length );
  //   // console.log(index);
  //   return index;
  // } 
     
  // setInterval ( () => {
  //   getRandomIndex()
  // }, 7000);

  return (
    <div className='mx-5'>
      {
        Titles.map( title => (
          <h2 className={title.css}>{title.title}</h2>
        ))
      }
    </div>
  )
}

export default Title

import Titles from '../../../data/Titles';

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
    <div className='mx-5 chat chat-end'>
      {
        Titles.map( title => (
          <h2 
            key={title.title} 
            className={title.css}>
              {title.title}
          </h2>
        ))
      }
    </div>
  )
}

export default Title

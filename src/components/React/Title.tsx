import Titles from '../../data/Titles';

const Title = () => {

  const getRandomIndex = () => {
    let index = Math.floor( Math.random() * Titles.length );
    // console.log(index);
    return index;
  } 
     
  setInterval ( () => {
    getRandomIndex()
  }, 7000);

  return (
    <div>
      <h1 className='text-black text-2xl flex flex-col justify-center h-full'>{Titles[getRandomIndex()]}</h1>
    </div>
  )
}

export default Title

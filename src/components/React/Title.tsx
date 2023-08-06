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
      <h1 className='text-black text-4xl font-extrabold mt-40 p-5 rounded-xl bg-beige shadow-xl'>{Titles[getRandomIndex()]}</h1>
    </div>
  )
}

export default Title

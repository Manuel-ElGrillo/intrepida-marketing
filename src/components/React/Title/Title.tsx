import Titles from '../../../data/Titles';

const Title = () => {

  return (
    <div className='flex flex-wrap chat-end mx-5 lg:mx-20'>
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

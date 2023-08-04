import quotes from "../../data/Quotes";

const Header = () => {

  const randomIndex = Math.floor( Math.random() * quotes.length);

  return (
    <header className='mt-10 h-screen flex flex-col text-center justify-center'>
      <p className="text-black text-3xl italic">
        {
          quotes[randomIndex].text
        }
      </p>
      <span className="text-black text-xl italic">
        {
          quotes[randomIndex].author
        }
      </span>
    </header>
  )
}

export default Header

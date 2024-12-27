import {userState} from "react"

const App = () => {
  const ROOT = 'http://localhost:8000/images'
  const [images, setImages] = useState(null)

  const surprisePrompt = ["A blue bunny eating watermelon", 
    "A pink flamingo playing the trombone",
    "A purple elephant riding a unicorn",
    "A green dragon flying a kite"]

  const genImages = async() => {
    try {
      options = {
        method: 'POST',
        body: JSON.stringify({ 
          message: "text"
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const response = await fetch(ROOT, options)
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="app">
      <section className="search">
        <p>Start with a detailed description.
          <span className="surprise">Surprise Me!</span>
        </p>
        <div className="input-cont">
          <input placeholder="A yellow chicken playing the harmonica"></input>
          <button onClick={genImages}>Generate</button>
        </div>
      </section>
      <section className="image">
        {images?.map((image, _index) => (
          <img key={_index} src={image.url} alt="Generated image"></img>
        ))}
      </section>
      
    </div>
  )
}

export default App;

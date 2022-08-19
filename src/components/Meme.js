import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([]) 

    React.useEffect(() => {
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(data => setAllMemes(data.data.memes))
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    },[])

    function handleText(event) {
        const {id, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [id]: value
        }))
    }

    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return ( 
        <div>
            <small>Disclaimer: This meme generator alls an API which returns an array of meme templates.<br /> 
                The texts are applied strictly to the top and bottom of the image, 
                therefore it will not fit for some of the meme formats</small>
            <div className="form">
                <div className="captionInput">
                <input 
                    type="text" 
                    id="topText" 
                    placeholder="Top Text"
                    onChange={handleText} 
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    id="bottomText" 
                    placeholder="Bottom Text" 
                    onChange={handleText} 
                    value={meme.bottomText}
                />
                </div>
                <button id="generateMeme" onClick={getMeme}>This meme goes hard</button>
            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bot">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
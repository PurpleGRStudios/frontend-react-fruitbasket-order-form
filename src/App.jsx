import React from 'react';
import './App.css'

function App() {

    const [apple, setApple] = React.useState(0)
    //console.log(apple)
    const [banana, setBanana] = React.useState(0);
    //console.log(banana)
    const [strawberry, setStrawberry] = React.useState(0);
    //console.log(strawberry);
    const [kiwi, setKiwi] = React.useState(0);
    console.log(`kiwi: ${kiwi}, banana: ${banana}, strawberry: ${strawberry}, apple: ${apple}`);



    function resetFruits(){
        setApple(0);
        setBanana(0);
        setStrawberry(0);
        setKiwi(0);
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <h1>Je mag toch niet naar buiten</h1>
        <section>
            <article className="area">
                <h2>Apples</h2>
                <button type="button" disabled={apple === 0} onClick={() => setApple(apple - 1)}>

                    -

                </button>
                <p>{apple}</p>
                <button type={"button"} onClick={() => setApple(apple + 1)}>

                    +

                </button>
            </article>
            <article className="area">
                <h2>Bananas</h2>
                <button type="button" disabled={banana === 0} onClick={() => setBanana(banana - 1)}>
                    -
                </button>
                <p>{banana}</p>
                <button type={"button"}  onClick={() => setBanana(banana + 1)}>

                    +

                </button>
            </article>
            <article className="area">
                <h2>Strawberry</h2>
                <button type="button" disabled={strawberry === 0} onClick={() => setStrawberry(strawberry - 1)}>

                    -

                </button>
                <p>{strawberry}</p>
                <button type={"button"} onClick={() => setStrawberry(strawberry + 1)}>

                    +

                </button>
            </article>
            <article className="area">
                <h2>Kiwi</h2>
                <button type="button" disabled={kiwi === 0} onClick={() => setKiwi(kiwi - 1)}>

                    -

                </button>
                <p>{kiwi}</p>
                <button type={"button"} onClick={() => setKiwi(kiwi + 1)}>

                    +

                </button>
            </article>
            <article className="area">
                <button type="button" onClick={() => resetFruits()}>reset</button>
            </article>
        </section>





    </>
  )
}

export default App

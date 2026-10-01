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


    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [zipcode, setZipcode] = React.useState('');
    const [deliveryFrequency, setDeliveryFrequency] = React.useState('week');
    const [deliveryTimeslot, setDeliveryTimeslot] = React.useState('daytime');
    const [remark, setRemark] = React.useState('');
    const [agreeTerms, setAgreeTerms ] = React.useState(false);



    function resetFruits(){
        setApple(0);
        setBanana(0);
        setStrawberry(0);
        setKiwi(0);
    }

    function handleSubmit(e) {
            e.preventDefault();
            console.log(`
         FirstName: $(firstname),
         LastName: $(lastname),
         Age: $(age),
         ZipCode: $(zipcode),
         DeliveryFrequency: $(deliveryFrequency),
         Remark: $(remark),
         AgreeTerms: $(agreeTerms)
         `);

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

        <form onSubmit={handleSubmit}>
            <section className="area">
                <label htmlFor="firstname-field"> FirstName </label>
                <input name="firstname"
                       id="firstname-field"
                       type="text"
                       value={firstname}
                       onChange={(e) => setFirstname(e.target.value)}
                />
            </section>
            <section className="area">
                <label htmlFor="lastname-field"> Last Name </label>
                <input name="lastname"
                       id="lastname"
                       type="text"
                       value={lastname}
                       onChange={(e) => setLastname(e.target.value)}
                />
            </section>
            <section className="area">
                <label htmlFor="age-field"> Age </label>
                <input name="age"
                       id="age-field"
                       type="number"
                       value={age}
                       onChange={(e) => setAge(e.target.value)}
                />
            </section>
            <section className="area">
                <label htmlFor="zip-code"> Zip Code </label>
                <input name="zip"
                       id="zip-code"
                       type="text"
                       value={zipcode}
                       onChange={(e) => setZipcode(e.target.value)}
                />
            </section>
            <section className="area">
                <label htmlFor="deliveryFrequency"> Delivery Frequency </label>
                <select name="DeliveryFrequency"
                        id="deliveryFrequency"
                        value={deliveryFrequency}
                        onChange={(e) => setDeliveryFrequency(e.target.value)}
                >
                    <option value="week">Every week</option>
                    <option value="two-week">Every other week</option>
                    <option value="month">Every month</option>
                    <option value="year">Every year</option>
                </select>
            </section>
            <section className="area">
                <label htmlFor="deliveryTimeslot"> Daytime </label>
                <input
                    type="radio"
                    value="daytime"
                    name="timeslot"
                    id="timeslot-field-daytime"
                    checked={deliveryTimeslot === "daytime"}
                    onChange={(e) => setDeliveryTimeslot(e.target.value)}
                />
                <label htmlFor="deliveryTimeslot"> Evening </label>
                <input
                    type="radio"
                    value="evening"
                    name="evening"
                    id="eveningSlot"
                    checked={deliveryTimeslot === "evening"}
                    onChange={(e) => setDeliveryTimeslot(e.target.value)}
                />
            </section>
            <section className="area">
                <label htmlFor="remark-field"> Remarks </label>
                <textarea
                    name="remark"
                    id="remark-field"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    rows={6}
                    cols={40}
                />
            </section>
            <section className="area">
                <input
                    type="checkbox"
                    name="agree"
                    id="agree-field"
                    value={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agree-field"> I agree with the terms </label>
            </section>

            <button type="submit"> Send </button>
        </form>
    </>
  );
}

export default App

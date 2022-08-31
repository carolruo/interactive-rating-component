import { useState } from "react"
import star from "./images/icon-star.svg"
import thank from "./images/illustration-thank-you.svg"

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [numberSelected, setNumber] = useState("");

  const Button = ({ number }) => {
    return (
      <button onClick={() => setNumber(number)} className="btn-number bg-gray-700 text-gray-200 h-10 w-10 pt-1 rounded-full focus:bg-gray-400">{number}</button>
    )
  }
  return (
    <>
      {!isSubmitted &&
        <div className="wrapper">
          <img src={star} alt="" className="bg-gray-700 p-2 rounded-full" />
          <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>
          <p className="text-gray-400 mb-10">Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!</p>

          <ul className="grid grid-cols-5 gap-3 mb-10">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>

          <div className="text-center">
            <button onClick={() => setIsSubmitted(true)} className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full">Submit</button>
          </div>
        </div>
      }
      {isSubmitted && <ThankYou number={numberSelected} setIsSubmitted={setIsSubmitted} />}
    </>
  );
}

const ThankYou = ({ number, setIsSubmitted }) => {
  return (
    <div className="wrapper">
      <img src={thank} alt="" className="mx-auto block mb-5" />
      <div className="flex items-center justify-center">
        <p className="p-rating rounded-full bg-gray-700 text-center text-sm px-3 pt-1">You selected {number} out of 5</p>
      </div>
      <h2 className="text-gray-100 text-3xl text-center my-6">Thank you</h2>
      <p className="text-gray-400 text-center mb-10">We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
      <div className="text-center">
        <button onClick={() => setIsSubmitted(false)} className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full">Go Back</button>
      </div>
    </div>
  )
}

export default App;

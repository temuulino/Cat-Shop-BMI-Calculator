import React, { useState } from "react";

function BMICalculator() {
  const [info, setInfo] = useState({
    height: 0,
    weight: 0
  });
  const [bmi, setBMI] = useState(0);

  function handleChange(event) {
    const { name, value } = event.target;

    setInfo((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  // (16.9 kg / 105.4 cm / 105.4 cm ) x 10,000 = 15.2
  function handleClick() {
    setBMI((info.weight / info.height / info.height) * 10000);
  }

  const renderBMIresult = () => {
    if (bmi < 18.5 && bmi > 1) {
      return (
        <div className="skinny-cat">
          <img
            src="https://media1.giphy.com/media/MaUARAPy1EfXS4P0H5/giphy.gif?cid=6c09b95295ef87c0ddc2fee01a754a83db096afb4cdbcecf&rid=giphy.gif&ct=s"
            alt="skinny-cat"
          />
          <div className="box">
            <div className="bubble">
              <p>
                Who you callin <br />
                skinny bro!
              </p>
              <div className="left-point"></div>
            </div>
          </div>
        </div>
      );
    } else if (bmi > 18.5 && bmi < 24) {
      return (
        <div className="skinny-cat">
          <img
            src="https://i.pinimg.com/originals/e7/d2/36/e7d236fad560f7355f84ec0d4227a6a5.png"
            alt="skinny-cat"
          />
          <div className="box">
            <div className="bubble">
              <p>
                Normal? <br /> oh okay...
              </p>
              <div className="left-point"></div>
            </div>
          </div>
        </div>
      );
    } else if (bmi > 25) {
      return (
        <div className="skinny-cat">
          <img
            src="https://i.pinimg.com/originals/22/97/7b/22977baf40fa3acdea693770da51b75a.png"
            alt="skinny-cat"
          />
          <div className="box">
            <div className="bubble">
              <p>
                I'm not overweight <br /> you are...
              </p>
              <div className="left-point"></div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex-container">
        <input
          onChange={handleChange}
          name="height"
          type="text"
          placeholder="Height"
        />
        <input
          onChange={handleChange}
          name="weight"
          type="text"
          placeholder="Weight"
        />
        <button onClick={handleClick}>Submit</button>
        {renderBMIresult()}
      </div>
    </div>
  );
}

export default BMICalculator;

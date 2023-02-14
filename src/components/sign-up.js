import React, { useState, useEffect } from "react";
const Signup = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Chip(props) {
    const handleClick = (e) => {
      props.onCancel(props.name);
    }
    return (
      <div className="chip">
  
        <div className="chip-content">{props.name}</div>
        <div className="chip-close">
          <svg onClick={handleClick} className="chip-svg" focusable="true" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
        </div>
      </div>
    );
  }
  
  var [chipData, setChipData] = useState(["HTML","CSS","JS"]);

  const removeChip = (e) => {
    setChipData(chipData.filter(item => item !== e ));
  }

  const [alertText, setAlertText] = useState(
    "Try it free 7 days then ₹180/mo. thereafter"
  );

  const [isValid, setIsValid] = useState(false);

  const submit = () => {
    setAlertText("You have successfully subscribed to our plan");
  };
  const validate = () => {
    return fname.length && email.length && password.length;
  };

  useEffect(() => {
    const isValid = validate();
    setIsValid(isValid);
  }, [fname, email, password]);

  return (
    <div>
      <div className="Container">
        <div className="left">
          <div>
            <h1>Learn to code by watching others</h1>
            <h6>See how experienced developers solve problems in real-time.</h6>
            <span>
              Watching scripted tutorials is great, but understanding how
            </span>
            <p>developers think is invaluable.</p>
          </div>
        </div>
        <div className="right">
          <div className="Rectangle1">
            <span>{alertText}</span>
          </div>
          <div className="Rectangle2">
            <div className="Rectangle3">
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your name"
              />
            </div>
            <div className="Rectangle4">
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your E-mail"
              />
            </div>
            <div className="Rectangle5">
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your password"
              />
            </div>
            <div className="Rectangle6">
              <select name="language">
                <option>Choose your skill</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">js</option>
              </select>
            </div>
            <div className="Rectangle7">
            <div className="flex-row chips-container">
              {chipData.map((item, index) => {
                return <Chip onCancel={removeChip} name={item}></Chip>;
              })}
            </div>
            </div>
            <div className="Rectangle7"></div>
            <div className="Rectangle8"></div>
            <div className="Rectangle9"></div>
            <div className="Rectangle10">
              <button
                disabled={!isValid}
                onClick={submit}
                style={{ backgroundColor: !isValid ? "" : "green" }}
              >
                CLAIM YOUR FREE TRIAL{" "}
              </button>
            </div>
            <div className="Rectangle11">
              <h6>
                By clicking the button you are agreeing to our{" "}
                <span>Terms and Services</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;

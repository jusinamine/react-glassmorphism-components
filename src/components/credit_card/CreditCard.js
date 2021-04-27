import React from "react";
import "./credit-card.css";
import chip from "../../images/chip.png";
const CreditCard = ({ textColor = "#000" }) => {
  return (
    <div className="credit-card">
      <div className="face front">
        <h3 className="debit" style={{ color: textColor }}>
          Debit Card
        </h3>
        <h3 className="bank" style={{ color: textColor }}>
          Bank Name
        </h3>
        <img className="chip" src={chip} alt="chip" />
        <h3 className="number" style={{ color: textColor }}>
          0123 4567 8901 2345
        </h3>
        <h5 className="valid" style={{ color: textColor }}>
          <span>
            Valid
            <br />
            thru
          </span>
          <span>10/23</span>
        </h5>
        <h5 className="card-holder" style={{ color: textColor }}>
          Muhammad Irshad
        </h5>
      </div>
      <div className="face back">
        <div className="blackbar"></div>
        <div className="ccvtext" style={{ color: textColor }}>
          <h5>Autorized Signature-not valid unless signed</h5>
          <div className="whitebar"></div>
          <div className="ccv" style={{ color: textColor }}>
            123
          </div>
        </div>
        <p className="text" style={{ color: textColor }}>
          Lorem ipsum dolor sit amet, has purto appetere oporteat ut, est primis
          appareat omittantur eu. Ex sea denique intellegat, eos saperet
          placerat gubergren cu. Quis omnium vivendo cu has, usu percipit
          intellegat ad. Per choro rationibus comprehensam te. Sed in laoreet
          delicata intellegat, augue postulant pro id. Pro erant singulis ei.
          Vel eu verear erroribus comprehensam, est illud omittam ne.
        </p>
      </div>
    </div>
  );
};

export default CreditCard;

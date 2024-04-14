import Button from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" />
          <Button onClickHandler={handleClick} value="Rolex" title="Rolex" />
          <Button onClickHandler={handleClick} value="Poco" title="Poco" />
          <Button onClickHandler={handleClick} value="Motorola" title="Motorola" />
          <Button onClickHandler={handleClick} value="Logitech" title="Logitech" />
          <Button onClickHandler={handleClick} value="ZEBRONICS" title="ZEBRONICS" />
          <Button onClickHandler={handleClick} value="Dell" title="Dell" />
          <Button onClickHandler={handleClick} value="Sony" title="Sony" />
        
        </div>
      </div>
    </>
  );
};

export default Recommended;
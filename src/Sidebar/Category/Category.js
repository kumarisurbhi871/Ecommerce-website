import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="watch"
          title="watch"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="iPad"
          title="iPad"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Phone"
          title="Phone"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="keyboard"
          title="keyboard"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Mouse"
          title="Mouse"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Camera"
          title="Camera"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
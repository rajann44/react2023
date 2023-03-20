export default function Search({ handleText, handleOnChange, handleOnClick }) {
  return (
    <div className="input-group mb-3 my-3 w-50">
      <input
        type="text"
        className="form-control"
        placeholder="Search Wiki"
        aria-label="Wikipedia"
        onChange={(e) => handleOnChange(e)}
        value={handleText}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={() => handleOnClick()}
      >
        Search Anything!
      </button>
    </div>
  );
}

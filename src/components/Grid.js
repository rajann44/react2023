import Form from './Form'
import Weather from './Weather'

function Grid() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col col-md-auto"><Weather city="Get Any City" /></div>
        <div className="col my-3"><Form></Form></div>
      </div>
    </div>
  );
}

export default Grid;

import Form from './Form'
import Weather from './Weather'

function Grid() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col col-md-auto"><Weather city="Sirsa" /></div>
        <div class="col my-3"><Form></Form></div>
      </div>
    </div>
  );
}

export default Grid;

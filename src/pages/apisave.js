const API = () => {
    
function callApi() {
    // alert('Button was pressed!');
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json', { method: 'GET' })
    .then(data => data.json()) // Parsing the data into a JavaScript object
    .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
    // .then(response => alert(response.headers.get('content-type')))
}
// let listItems = this.state.cities.map((cityname) => 
//           <li key={cityname.city}>{cityname.city}</li>
//         );

  return  <div>
  <h1>API Call</h1>
  <form> 
    <fieldset>
        <label>
          Currency: 
          <input name="name" />
        </label>
    </fieldset>
    <button type="submit">Submit</button>
  </form>

  <button onClick={callApi}>Clik me</button>
  <footer>My Footer goes here</footer>
  </div>;
};

export default API;
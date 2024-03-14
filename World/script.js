document.addEventListener("DOMContentLoaded", fetchData);

function fetchData(query = "") {
  console.log(query, "que");
  const apiUrl = query
    ? `https://restcountries.com/v3.1/name/${query}`
    : "https://restcountries.com/v3.1/all";
  console.log(apiUrl);
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  const searchInput = document.getElementById("searchData");
  searchInput.addEventListener("input", handleSearch);
}

function displayData(data) {
  const dataContainer = document.getElementById("data");
  dataContainer.innerHTML = ''; // Clear previous search results

  data.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
        <div> 
        <img src= ${item.flags.png} />
        <h3> ${item?.altSpellings[2]}</h3>
        <p>Population: ${item?.population}</p>
        <p>Region: ${item?.region}</p>
        <p>Capital: ${item?.capital}</p>
        </div>`;
    dataContainer.appendChild(itemElement);
  });
}
function handleSearch() {
  console.log("handlesearch");
  const query = document.getElementById("searchData");
  query.addEventListener("input", function (event) {
    let query = event.target.value;
    // Fetch data from the API based on search query
    fetchData(query);
  });
}
function openModal(){
    console.log('object')
    const dataContainer = document.getElementById("modal");

    const createdModal=document.createElement("div")
    createdModal.classList.add('modalList');
    createdModal.innerHTML=`
    <div>
    <p>hello </p>
    </div>
    `
    dataContainer.appendChild(createdModal);
}

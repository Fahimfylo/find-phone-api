const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json()
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}
const displayPhones = phones => {
    // console.log(phones)
    const phoneContainer= document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        // 2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`
        // 3.set inner html
        phoneCard.innerHTML= `
        <figure><img src="${phone.image}" alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>Whether you're an Android aficionado or an iOS enthusiast, we've got something for everyone</p>
          <p>Price : 00</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        // 4. append child
        phoneContainer.appendChild(phoneCard);
    })
}
// handle search button
const handleSearch = () => {
  const searchField =document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}
const handleSearch2 = () =>{
  const searchField = document.getElementById('search-field2')
  const searchText = searchField.value;
}
// loadPhone()
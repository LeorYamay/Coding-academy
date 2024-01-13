'use strict'

function onInit()
{
    getContacts(useContacts);
}

function useContacts(contacts)
{
    // console.log(contacts);
    const strHTMLs =contacts.map((contact) =>
    `
      <article class="card">
        <div class="image">
          <img src="https://robohash.org/${contact.fname}">
        </div>
        <div class="description">
          <p class="name">${contact.fname} ${contact.lname}</p>
          <p class="tel">${contact.tel}</p>
          <p class="address">${contact.address}</p>
          <p class="city">${contact.city}</p>
        </div>
      </article>`
    )
    document.querySelector('.contactsPage').innerHTML = strHTMLs.join('')
}
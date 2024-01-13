
function init() {
    prmFinal()
}


function prm1() {
    compareToTen(15)
        .then(result => console.log(result)) // Should Print: 15 is Valid
        .catch(error => console.log(error))
    compareToTen(8)
        .then(result => console.log(result))
        .catch(error => console.log(error)) // Should Print: 8 is too small

    function compareToTen(number) {
        if (number >= 10) {
            return Promise.resolve('valid')
        } else {
            return Promise.reject('Give me more')
        }
    }
}

function prm2() {
    makeAllCaps(['cucumber', 'tomatos', 'avocado'])
        .then(sortWords)
        .then((result) => console.log(result))
        .catch(error => console.log(error))

    makeAllCaps(['cucumber', 44, true])
        .then(sortWords)
        .then((result) => console.log(result))
        .catch(error => console.log(error))

    function makeAllCaps(inputs) {
        if (inputs.some(input => !isString(input))) {
            return Promise.reject("one of these is not a word")
        }

        // console.log(inputs);
        return Promise.resolve(inputs.map(input => input.toUpperCase()));
    }
    function sortWords(inputs) {
        // console.log(inputs);
        return inputs.sort();
    }
    function isString(input) {
        return typeof input === 'string';
    }
}

function prm3() {
    function add(prmX, prmY) {
        return Promise.all([prmX, prmY])
            .then(values => {
                return values[0] + values[1]
            })
    }
    // `fetchX()` should return a promise that is resolved to 25 immediately
    // `fetchY()` should return a promise that is resolved after 2 seconds to 17
    add(fetchX(), fetchY())
        .then(sum => {
            console.log(sum)
        })

    function fetchX() {
        return Promise.resolve(25);
    }
    function fetchY() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000, 17)
        })
    }
}

function prmFinal() {

    axios.get('https://api.github.com/users').then(res => useUsers(res.data))
        .catch(err => console.log('error: ', err))

    async function useUsers(usersList) {
        const strHTMLs = await Promise.all(usersList.map(async (user) => {
            const numberOfRepos = await axios.get(user.repos_url).then(res => res.data.length );
            const userData = `
  <article class="card">
    <div class="image">
      <img src="${user.avatar_url}" alt="${user.login} Avatar">
    </div>
    <div class="description">
      <p class="name">${user.login}</p>
      <p class="id">${user.id}</p>
      <p class="node-id">${user.node_id}</p>
      <p class="url"><a href="${user.url}" target="_blank">${user.url}</a></p>
      <p class="html-url"><a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
      <p class="followers-url"><a href="${user.followers_url}" target="_blank">${user.followers_url}</a></p>
      <p class="following-url"><a href="${user.following_url}" target="_blank">${user.following_url}</a></p>
      <p class="gists-url"><a href="${user.gists_url}" target="_blank">${user.gists_url}</a></p>
      <p class="starred-url"><a href="${user.starred_url}" target="_blank">${user.starred_url}</a></p>
      <p class="subscriptions-url"><a href="${user.subscriptions_url}" target="_blank">${user.subscriptions_url}</a></p>
      <p class="organizations-url"><a href="${user.organizations_url}" target="_blank">${user.organizations_url}</a></p>
      <p class="repos-url"><a href="${user.repos_url}" target="_blank">${user.repos_url}</a></p>
      <p class= "numberOfRepos">number of repos: ${numberOfRepos}</p>
      <p class="events-url"><a href="${user.events_url}" target="_blank">${user.events_url}</a></p>
      <p class="received-events-url"><a href="${user.received_events_url}" target="_blank">${user.received_events_url}</a></p>
      <p class="type">${user.type}</p>
      <p class="site-admin">${user.site_admin}</p>
      <!-- Add more properties as needed -->
    </div>
  </article>
`;
            return userData;
        }));
        document.querySelector('.users').innerHTML = strHTMLs.join('');
    }

}

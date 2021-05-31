async function getRequest() {
  const ul = document.getElementById('ul');
  // const userName = document.getElementById('userName').value;
  const req = JSON.parse(localStorage.getItem('userData'));
  if (req) {
    // createProfileImage
    createProfileImage(req.avatar_url);
    // createUserImage
    createUserImage(req.avatar_url);
    // createUserInfo
    createUserInfo(req.name, req.twitter_username);
    // bioInfo
    bioInfo(req.bio);
    // getRepoCount
    getRepoCount(req.public_repos);
    // Get Data from GITHUB
    const getReposUrl = req.repos_url;
    const reposUrl = await (await fetch(getReposUrl)).json();
    console.log(reposUrl);

    reposUrl.forEach((data) => {
      const li = document.createElement('li');
      let obj = data;
      const date = new Date(obj.updated_at);
      const getShortMonth = date.toLocaleString('default', {
        month: 'short',
      });
      const getDay = date.getDay();
      const content = `
  <div class="link-to-repo">
   <a href="${obj.url}"><h3>${obj.name}</h3></a>
  <p class="repo-text"
    <span>
      <span class="repo-lang _m_r">${
        obj.language ? obj.language : ''
      }</span>
    </span>

    <span class="repo-star _m_r">
      <svg
        aria-label="star"
        class="nav-header-svg"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        role="img"
      >
        <path
          fill-rule="evenodd"
          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
        ></path></svg>${obj.stargazers_count}
    </span>





    <span>Updated on ${getDay} ${getShortMonth}</span>
  </p>
  </div>
  <div class="button">
  <button class="btn btn-sm">
    <svg
      class="nav-header-svg"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      ></path>
    </svg>
    Star
  </button>
  </div>
  `;
      li.innerHTML = content;
      ul.append(li);
    });

    // Loop through Data from GITHUB to Dynamically display content on the browser
  //   for (const data in reposUrl) {
  //     const li = document.createElement('li');
  //     const obj = data[data];
  //     const date = new Date(obj.updated_at);
  //     const getShortMonth = date.toLocaleString('default', {
  //       month: 'short',
  //     });
  //     const getDay = date.getDay();
  //     const content = `
  // <div class="link-to-repo">
  //  <a href="${obj.url}"><h3>${obj.name}</h3></a>
  // <p class="repo-text"
  //   <span>
  //     <span
  //       class="repo-color"
  //       style="background-color: ${
  //         obj.primaryLanguage ? obj.primaryLanguage.color : ''
  //       }"
  //     ></span>
  //     <span class="repo-lang _m_r">${
  //       obj.primaryLanguage ? obj.primaryLanguage.name : ''
  //     }</span>
  //   </span>

  //   <span class="repo-star _m_r">
  //     <svg
  //       aria-label="star"
  //       class="nav-header-svg"
  //       viewBox="0 0 16 16"
  //       version="1.1"
  //       width="16"
  //       height="16"
  //       role="img"
  //     >
  //       <path
  //         fill-rule="evenodd"
  //         d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
  //       ></path></svg>${obj.stargazers_count}
  //   </span>





  //   <span>Updated on ${getDay} ${getShortMonth}</span>
  // </p>
  // </div>
  // <div class="button">
  // <button class="btn btn-sm">
  //   <svg
  //     class="nav-header-svg"
  //     viewBox="0 0 16 16"
  //     version="1.1"
  //     width="16"
  //     height="16"
  //     aria-hidden="true"
  //   >
  //     <path
  //       fill-rule="evenodd"
  //       d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
  //     ></path>
  //   </svg>
  //   Star
  // </button>
  // </div>
  // `;
  //     li.innerHTML = content;
  //     ul.append(li);
  //   }
  }
}

// createProfileImage - CREATES PROFILE IMAGE
function createProfileImage(string) {
  const imageContainer = document.querySelector('.img-sm');
  const div = document.createElement('div');
  const divContent = `
  <img
    class="_img"
    src="${string}"
  />
  <span class="dropdown-caret"></span>`;
  div.innerHTML = divContent;
  imageContainer.append(div);
}

//createUserImage - CREATES USER'S IMAGE
function createUserImage(string) {
  const imageContainer = document.querySelector('.img-lg');
  const image = document.createElement('img');
  image.src = string;
  imageContainer.append(image);
}
// createUserInfo - CREATES UER'S INFO
function createUserInfo(name, twitter) {
  const userName = document.getElementById('user-name');
  const div = document.createElement('div');
  div.classList.add('_userH1');
  const userDetailsContent = `
    <h1>${name}</h1>
    <p>${twitter}</p>
    `;
  div.innerHTML = userDetailsContent;
  userName.append(div);
}

// bioInfo - CREATES BIO INFO
function bioInfo(bio) {
  const userTitle = document.querySelector('.user-title');
  const title = document.createElement('H2');
  const text = document.createTextNode(bio);
  title.append(text);
  userTitle.append(title);
}

// getRepoCount - GET'S REPO COUNT
function getRepoCount(number) {
  const repoCount = document.querySelector('.repo-count');
  repoCount.textContent = number;
}

function makeActive(e) {
  const listItems = document.querySelectorAll('.active');
  [].forEach.call(listItems, function (element) {
    element.classList.remove('active');
  });
  e.target.className = 'active';
}

// WHEN THE WINDOW LOADS IT CALLS THE getRequest()
window.onload = getRequest;

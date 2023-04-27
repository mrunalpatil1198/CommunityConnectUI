console.log("inside homepage css")
const id = sessionStorage.getItem('id');
const username = sessionStorage.getItem('username');
console.log('id:', id);
console.log('username:', username);

if (!id) {
  console.log("checking for id");
  window.location.href = 'login.html';
}


document.addEventListener("DOMContentLoaded", function() {
  fetch('http://3.144.231.17/api/v1/posts/')
    .then(response => response.json())
    .then(posts => {
      posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      const postCardsContainer = document.querySelector('#postCardsContainerId');

      posts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('post');

        const top = document.createElement('div');
        top.classList.add('post__top');
        
        const img = document.createElement('img');
        img.src="static-content/profile.jpeg";
        img.alt = 'User avatar';
        img.classList.add('user__avatar');
        top.appendChild(img);

        const topInfo = document.createElement('div');
        topInfo.classList.add('post__topInfo');

        const h3 = document.createElement('h3');
        h3.innerText = `${post.username}`;
        topInfo.appendChild(h3);

        const p = document.createElement('p');
        const timestamp = new Date(post.timestamp).toLocaleString();
        p.innerText = timestamp;
        topInfo.appendChild(p);

        // const pPriority = document.createElement('p');
        // const priorityText = post.priority ? 'High Priority' : 'Normal Priority';
        // pPriority.innerText = priorityText;
        // topInfo.appendChild(pPriority);

        top.appendChild(topInfo);
        card.appendChild(top);

        top.appendChild(topInfo);
        card.appendChild(top);

        const bottom = document.createElement('div');
        bottom.classList.add('post__bottom');

        const pMessage = document.createElement('p');
        pMessage.innerText = post.postText;
        bottom.appendChild(pMessage);

        card.appendChild(bottom);

        const image = document.createElement('div');
        image.classList.add('post__image');
        card.appendChild(image);

        if (post.priority) {
          card.style.backgroundColor = "#ffcccc";
        }

        postCardsContainer.appendChild(card);
      });
    });
});


function createPost() {
  const postText = document.querySelector('.messageSender__input').value;
  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  const isHighPriority = toggleSwitch.checked ? 1 : 0;
  const data = {
    postText: postText,
    priority: isHighPriority
  };

  console.log(data);
  setTimeout(() => {
    console.log('Priority:', data.priority);
  }, 1000);

  fetch(`http://3.144.231.17/api/v1/posts/${id}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Unable to create post');
    }
  })
  .then(data => {
    console.log('Success:', data);
    setTimeout(() => {
      console.log('Priority:', data.priority);
    }, 1000);
    // Reload the page to show the newly created post
    window.location.reload();
  })
  .catch(error => {
    console.error('Error:', error);
    // Display an error message to the user
    alert(error.message);
  });
}







// const posts = [
  //   {
  //     "id": 1,
  //     "postText": "How are you all?",
  //     "priority": true,
  //     "timestamp": "2023-04-26T02:58:22"
  //   },
  //   {
  //     "id": 2,
  //     "postText":"hi?",
  //     "priority": true,
  //     "timestamp": "2023-04-26T02:59:22"
  //   },
  // ];
  

// function loadPosts() {
//   fetch('http://3.144.231.17/api/v1/posts/')
//     .then(response => response.json())
//     .then(posts => {
//       // Iterate over the array of posts and append each post as a card to the postCardsContainer
//       posts.forEach(post => {
//         const card = createPostCard(post);
//         postCardsContainer.appendChild(card);
//       });
//     })
//     .catch(error => console.error(error));
// }



// document.addEventListener("DOMContentLoaded", function() {
//   // Your JavaScript code here
//   const postCardsContainer = document.querySelector('#postCardsContainerId');
// console.log(postCardsContainer)


// posts.forEach(post => {

//   console.log("looping")

//   const postCard = document.createElement('div');
//   postCard.classList.add('post');

//   const postTop = document.createElement('div');
//   postTop.classList.add('post__top');

//   const postTopIcon = document.createElement('i');
//   postTopIcon.classList.add('far', 'fa-comment');
//   postTopIcon.style.fontSize = '36px';
//   postTop.appendChild(postTopIcon);

//   const postTopInfo = document.createElement('div');
//   postTopInfo.classList.add('post__topInfo');

//   const postTitle = document.createElement('h3');
//   postTitle.innerText = `User ${post.id}`;
//   postTopInfo.appendChild(postTitle);

//   const postTimestamp = document.createElement('p');
//   postTimestamp.innerText = new Date(post.timestamp).toLocaleString();
//   postTopInfo.appendChild(postTimestamp);

//   postTop.appendChild(postTopInfo);
//   postCard.appendChild(postTop);

//   const postBottom = document.createElement('div');
//   postBottom.classList.add('post__bottom');

//   const postMessage = document.createElement('p');
//   postMessage.innerText = post.postText;
//   postBottom.appendChild(postMessage);

//   postCard.appendChild(postBottom);

//   const postImage = document.createElement('div');
//   postImage.classList.add('post__image');
//   postCard.appendChild(postImage);

//   postCardsContainer.appendChild(postCard);
// });


// });

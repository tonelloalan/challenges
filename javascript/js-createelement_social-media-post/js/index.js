console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// 1. create new section [x]
// 2. add a className to the section [x]
// 3. create a new p element [x]
// 4. add the className to the p element [x]
// 5. create a new footer element [x]
// 6. add the className to the footer element [x]
// 7. create a new span element [ ]
// 8. add the className to the span element [ ]
// 9. create a new button element [ ]
// 10. add the className to the button element [ ]
// 11. append the p element and the footer to the section [ ]
// 12. append span and button to the footer [ ]
// 13. append the section to the body [ ]

const newPost = document.createElement("section"); // assigned the post container section to  a variable
newPost.classList.add("post"); // added post class (style) to the new variable from  a class list
document.body.append(newPost); // append new post with the class

const newPostContent = document.createElement("p"); // assigned the post content section to  a variable
newPostContent.classList.add("post__content"); // added post content class (style) to the new variable from  a class list
newPostContent.textContent = "Your new post content here."; // assign new text for the post content
newPost.appendChild(newPostContent); // Append the new post content to the new post section

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPost.appendChild(newPostFooter); // Append the new post content to the new post section

const newPostSpan = document.createElement("span");

console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("section"); // assigned the post container section to  a variable
newPost.classList.add("post"); // added post class (style) to the new variable from  a class list
document.body.append(newPost); // append new post with the class

const newPostContent = document.createElement("p"); // assigned the post content section to  a variable
newPostContent.classList.add("post__content"); // added post content class (style) to the new variable from  a class list
newPostContent.textContent = "Your new post content here."; // assign new text for the post content

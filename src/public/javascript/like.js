const items = document.querySelectorAll('.like-btn');

console.log(items);

for (const item of items) {
  let likedPostId = item.getAttribute('data-id');
  let infoType = item.getAttribute('data-type');

  item.addEventListener("click", (event) => {
    axios.post("/like", {
      likedPostId,
      infoType,
    });

    console.log(likedPostId);

    if (item.innerText == "Like") {
      item.innerText = "Unlike";
    } else if (item.innerText == "Unlike") {
      item.innerText = "Like";
    };
  });
};
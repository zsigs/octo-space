const items = document.querySelectorAll('.like-btn');

console.log(items);

for (item of items) {
  let likedPostId = item.getAttribute('data-id');
  let infoType = item.getAttribute('data-type');

  item.addEventListener("click", (event) => {
    axios.post("/like", {
      likedPostId,
      infoType,
    });
  });
};

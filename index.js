(function () {
  window.distanceFromCenter = function (boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2;
  }
  
  // function adv() {
  //   location.href = "/pages/adventure.html";
  // }
  
  // function fantasy() {
  //   location.href = "/pages/fantasy.html";
  // }
  
  // function anime() {
  //   location.href = "/pages/anime.html";
  // }
  
  // function scifi() {
  //   location.href = "/pages/scifi.html";
  // }
  
  // function magic() {
  //   location.href = "/pages/magic.html";
  // }
  window.addEventListener("load", () => {
    const data = [
      { "path": "/pages/adventure.html", "id": "adventure" },
      { "path": "/pages/fantasy.html", "id": "fantasy" },
      { "path": "/pages/anime.html", "id": "anime" },
      { "path": "/pages/scifi.html", "id": "sci-fi" },
      { "path": "/pages/magic.html", "id": "magic" }
    ]
    data.forEach(({ path, id }) => {
      const el = document.querySelector(`#${id}`);
      if(el) {
        el.addEventListener("click", (e) => {
          e.preventDefault()
          location.href = `${window.location.protocol}//${window.location.hostname}${path}`
        })
      }
    })
  })
})()
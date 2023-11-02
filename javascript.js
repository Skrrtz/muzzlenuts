 let open = false;

  function myCreations() {
    const contentContainer = document.getElementById("contentContainer");

    if (open === false) {
      open = true;
      contentContainer.classList.add("contentContainer-open");
    } else {
      open = false;
      contentContainer.classList.remove("contentContainer-open");
    }
  }
      var link = document.querySelector(".search-button");

      var popup = document.querySelector(".modal-hotel-search");

      var form = popup.querySelector("form");
      var entry = popup.querySelector("[name=entry]");
      var exit = popup.querySelector("[name=exit]");
      var adult = popup.querySelector("[name=adult]");
      var children = popup.querySelector("[name=children]");

      var isStorageSupport = true;
      var storage = "";

      try {
        storage = localStorage.getItem("adult");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("modal-show");

        if (storage) {
          adult.value = storage;
        }
        entry.focus();
      });

      form.addEventListener("submit", function (evt) {
        if (!entry.value || !exit.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("adult", adult.value);
        }
      }
      });
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
      }
    }
  });
"use strict";

//smooth anchor
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);
  form.addEventListener("submit", () => {
    alert("Hello");
  });
  async function formSend(e) {
    e.preventDefault();

    const error = formValidate(form);

    const formData = new FormData(form);

    if (error === 0) {
      form.classList.add("_sending");
      const response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove("_sending");
      } else {
        alert("Помилка");
        form.classList.remove("_sending");
      }
    } else {
      alert("Заповніть обов'язкові поля");
    }
  }

  const formValidate = (form) => {
    var error = 0;
    const formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  };

  const formAddError = (input) => {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  };

  const formRemoveError = (input) => {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  };
});

//slider
if (screen.width < 600) {
  var swiper = new Swiper(".slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

var swiper2 = new Swiper(".slider2", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

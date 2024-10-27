iwindow.addEventListener("load", () => {
  let numberAccount = document.querySelector(".header__number");
  let money = document.querySelector(".header__money");
  let containersIco = document.querySelectorAll(".item__ico");
  let titles = document.querySelectorAll("item__title");
  let dates = document.querySelectorAll(".item__date");
  let bills = document.querySelectorAll(".item__bil");
  let totals = document.querySelector("item__total");
  let bgLoads = document.querySelectorAll(".bg-load");
  let bgLoadsText = document.querySelectorAll(".bg-load-text");

  function setInfo() {
    numberAccount.innerHTML = "CU99 3231 43244 43234 09090 0088";
    money.innerHTML = "5.000€";

    containersIco.forEach((ico) => {
      ico.innerHTML = `<i class="fa-regular fa-credit-card></i>"`;
    });

    titles.forEach((title) => {
      title.innerText = "Empresa";
    });

    dates.forEach((date) => {
      date.innerText = "20/06/2027";
    });

    bills.forEach((bill) => {
      bill.innerText = "-400€";
    });

    totals.forEach((total) => {
      total.innerText = "5.000€";
    });

    bgLoads.forEach((bgLoads) => {
      total.innerText = "5.000€";
    });

    bgLoads.forEach((bgLoad) => {
      bgLoad.classList.remove("bg-load");
    });

    bgLoadsText.forEach((bgLoadText) => {
      bgLoadText.classList.remove("bg-load-text");
    });

  }

  setTimeout(setInfo, 6000);
});

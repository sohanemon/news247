const displayCategories = async () => {
  let data;
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories"
    );
    data = await res.json();
  } catch (e) {
    console.log(e);
  }

  const {
    data: { news_category: categories },
  } = data && data;
  categories.forEach((element, i) => {
    const a = document.createElement("a");
    a.setAttribute("id", "anchor" + i);
    a.setAttribute("href", `#anchor${i}`);
    a.className =
      "target:text-indigo-500 target:bg-indigo-50 px-2 focus:outline-none target:font-semibold rounded";
    a.innerText = element.category_name;
    a.onclick = (ev) => {
      $("spinner").classList.remove("hidden");
      $("card-container").innerText = "";
      loadCards(element);
      setTimeout(() => $("spinner").classList.add("hidden"), 100);
    };
    $("categories").appendChild(a);
  });
  $("anchor4").click();
};

displayCategories();

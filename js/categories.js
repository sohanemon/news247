const displayCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  const {
    data: { news_category: categories },
  } = data;
  categories.forEach((element, i) => {
    const a = document.createElement("a");
    a.setAttribute("id", "anchor" + i);
    a.setAttribute("href", `#anchor${i}`);
    a.className =
      "target:text-indigo-500 target:bg-indigo-50 px-2 focus:outline-none target:font-semibold rounded";
    a.innerText = element.category_name;
    a.onclick = (ev) => {
      loadCards(element);
    };
    $("categories").appendChild(a);
  });
  $("anchor4").click();
};
displayCategories();

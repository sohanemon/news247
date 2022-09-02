const loadCards = async ({ category_name: name, category_id: id }) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const { data } = await res.json();
  data.forEach((ele) => {
    createCard(ele);
  });
};

const createCard = (news) => {
  console.log(news);

  const modifiedDetails =
    news.details.slice(0, news.details.indexOf(".") + 1) +
    "<br><br>" +
    news.details.slice(news.details.indexOf(".") + 1);
  const div = document.createElement("div");
  div.className = "flex justify-center";
  div.innerHTML = `
    <div
        class="md:grid flex flex-col md:grid-cols-12 md:w-full p-5 rounded-xl bg-white shadow-lg"
      >
        <div class="md:col-span-3 max-h-72 md:max-h-full">
          <img
            class="w-full object-cover h-full rounded-xl"
            src=${news.thumbnail_url}
            alt=""
          />
        </div>

        <div class="p-6 md:col-span-9 flex flex-col justify-start">
          <h1 class="text-2xl font-bold leading-loose text-gray-900">
            ${news.title}
          </h1>
          <p class="text-base leading-relaxed ellipsis text-gray-400">
           ${modifiedDetails}
          </p>
          <div
            class="flex items-center justify-between flex-wrap text-gray-600 text-lg my-4"
          >
            <div
              class="flex space-x-2.5 items-center justify-start basis-3/4 md:basis-1/4"
            >
              <img
                class="w-10 h-full rounded-full"
                src=${news.author.img}
              />
              <div class="inline-flex flex-col items-start justify-start">
                <p class="text-base text-gray-800 whitespace-nowrap">${
                  news.author.name
                }</p>
                <p class="text-sm text-gray-500 capitalize">${news.author.published_date.slice(
                  0,
                  10
                )}</p>
              </div>
            </div>
            <div
              class="flex space-x-3 items-center justify-end w-20 h-6 basis-1/4 md:basis-0"
            >
              <i class="fa-regular fa-eye"></i>
              <p class="text-lg font-bold text-gray-600 ">${news.total_view}</p>
            </div>
            <div
              class="flex space-x-2.5 basis-1/2 md:basis-0 items-center justify-end w-1/5 h-6"
            >
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div
              class="flex items-center cursor-pointer justify-center w-10 h-full px-2.5 py-2.5"
            >
              <button class="text-2xl text-indigo-500 modal-btn" data-bs-toggle="modal" data-bs-target="#modal${
                news._id
              }">
                <i class="fa-solid fa-arrow-right grid place-content-center hover:bg-indigo-100 w-14 h-14 rounded-full"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="modal${news._id}"
      tabindex="-1"
      aria-labelledby="exampleModalLgLabel"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
        <img src=${news.image_url} class="" alt=${news.title}/>
        <div class="p-7">
            <h1 class="text-2xl font-semibold">${news.title}</h1>
            <div
            class="flex items-center justify-between flex-wrap text-gray-600 text-lg my-4 "
          >
            <div
              class="flex space-x-2.5 mb-4 items-center justify-start basis-3/4 md:basis-1/4"
            >
              <img
                class="w-10 h-full rounded-full"
                src=${news.author.img}
              />
              <div class="inline-flex flex-col items-start justify-start">
                <p class="text-base text-gray-800 whitespace-nowrap">${
                  news.author.name
                }</p>
                <p class="text-sm text-gray-500 capitalize">${news.author.published_date.slice(
                  0,
                  10
                )}</p>
              </div>
            </div>
          <p class= 'text-justify first-letter:text-6xl first-letter:font-semibold' >${
            news.details
          }</p>
          
        </div> <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        </div>
      </div>
    </div>
    `;
  $("card-container").appendChild(div);
  console.log(news.author.name);
};

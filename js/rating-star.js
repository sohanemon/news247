const getStar = (rating) => {
  let ratingStr = [...Array(Math.round(rating)).keys()].reduce(
    (p) => p.concat("<i class='fa-solid text-orange-400 fa-star'></i>"),
    ""
  );
  return [...Array(5 - Math.round(rating)).keys()].reduce(
    (p) => p.concat("<i class='fa-solid text-gray-400 fa-star'></i>"),
    ratingStr
  );
};

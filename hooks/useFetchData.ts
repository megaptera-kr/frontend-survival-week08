const useFetchData = async () => {
  const res = await fetch('http://localhost:3000/restaurants')
    .then((response) => response)
    .then((response) => response.json());
  return res;
};

export default useFetchData;

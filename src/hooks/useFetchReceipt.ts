export default function useFetchReceipt() {
  async function fetchReceipt(id:string) {
    const url = `http://localhost:3000/orders/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return {
    fetchReceipt,
  };
}

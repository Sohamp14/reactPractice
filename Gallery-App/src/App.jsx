import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
      setUserData(response.data);
      setLoading(false);
    };
    getData();
  }, [index]);

  return (
    <div className="bg-black h-screen text-white px-10 py-6 flex flex-col">
      {/* Card grid takes available space */}
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <h3 className="text-gray-400 text-xl font-semibold col-span-full text-center">
              Loading...
            </h3>
          ) : (
            userData.map((elem, idx) => <Card key={idx} elem={elem} />)
          )}
        </div>
      </div>

      <div className="flex justify-center gap-5 items-center p-4 border-t border-gray-700">
        <button
          className="bg-amber-400 text-black px-4 py-2 font-semibold text-sm hover:bg-amber-500 rounded-lg cursor-pointer active:scale-95 disabled:opacity-50"
          onClick={() => setIndex(index - 1)}
          disabled={index === 1}
          aria-label="Previous page">
          Prev
        </button>
        <h4 className="font-semibold text-xl">Page {index}</h4>
        <button
          className="bg-amber-400 text-black px-4 py-2 font-semibold text-sm hover:bg-amber-500 rounded-lg cursor-pointer active:scale-95"
          onClick={() => setIndex(index + 1)}
          aria-label="Next page">
          Next
        </button>
      </div>
    </div>
  );
};


export default App;

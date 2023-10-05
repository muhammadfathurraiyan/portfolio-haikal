import { useState, useEffect } from "react";

interface ImageData {
  id: string;
  download_url: string;
}
const History = () => {
  const [data, setData] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=10&limit=15")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="absolute left-14 top-[100vh] px-8 gap-4 h-screen flex flex-col">
      <div className="">
        <h1 className="text-4xl font-bold">Journey</h1>
        <p>The Journey of my life.</p>
      </div>
      <div className="flex-wrap flex gap-4 max-sm:flex-row">
        {data.map((d) => (
          <div key={d.id} className="h-[40vh] grow max-sm:h-auto max-sm:w-full">
            <img
              loading="lazy"
              className="rounded-lg object-cover max-h-full min-w-full align-bottom max-sm:w-full max-sm:max-h-[75vh] max-sm:min-w-0 after:grow-[10] after:content-none"
              src={d.download_url}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;

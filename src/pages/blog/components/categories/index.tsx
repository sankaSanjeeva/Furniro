export default function Categories() {
  return (
    <div className="px-5 text-text-t">
      <h4 className="font-medium text-2xl text-black">Categories</h4>
      <ul className="flex flex-col gap-10 mt-8">
        <li>
          <div className="flex justify-between gap-5">
            <span>Crafts</span>
            <span>1</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between gap-5">
            <span>Design</span>
            <span>6</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between gap-5">
            <span>Handmade</span>
            <span>2</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between gap-5">
            <span>Interior</span>
            <span>10</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between gap-5">
            <span>Wood</span>
            <span>4</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

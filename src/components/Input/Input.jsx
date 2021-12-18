export const Input = ({ label, type, name, placeholder, dropArray }) => {
  return (
    <div className="flex-1 mb-2">
      {type !== "select" ? (
        <label>
          <p>{label}</p>
          <div>
            <input
              name={name}
              type={type}
              className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder={placeholder}
            />
          </div>
        </label>
      ) : null}
      {type === "select" ? (
        <label>
          <p>{label}</p>
          <div className="">
            <select
              name={name}
              className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              {dropArray.map((g) => (
                <option key={g.name} value={g.name}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
        </label>
      ) : null}
    </div>
  );
};

Input.defaultProps = {
  label: "Label",
  type: "text",
  name: "name",
  dropArray: [
    { key: 12121, name: "M" },
    { key: 3432, name: "F" },
  ],
};

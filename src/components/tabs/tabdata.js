import React from "react";
const Tabdata = ({ filtered, name, description, web, onClick}) => {
  return (
    <>
      <table className="mt-6 mb-6 border-collapse border border-slate-400 ...">
        <thead className="bg-lime-500 text-white">
          <tr>
            <th className="text-sm border border-slate-300 p-2"></th>
            <th className="text-sm border border-slate-300 p-2">{name}</th>
            <th className="text-sm border border-slate-300 p-2">
              {description}
            </th>
            <th className="text-sm border border-slate-300 p-2">{web}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((items, index) => {
            items.id = index;
            return (
              <>
                <tr key={index}>
                  <td className="text-center text-sm border border-slate-300 p-2">
                    <input
                      id={index}
                      onClick={onClick}
                      type="checkbox"
                      class="checked:bg-blue-500"
                      value={items.id}
                    />
                  </td>

                  <td className="text-sm border border-slate-300 p-2">
                    {items.name}
                  </td>
                  <td className="text-sm border border-slate-300 p-2">
                    {items.username}
                  </td>
                  <td className="text-sm border border-slate-300 p-2">
                    {items.email}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Tabdata;

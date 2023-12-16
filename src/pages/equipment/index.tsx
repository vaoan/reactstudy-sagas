const EquipmentList = () => {
  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Equipment 1</td>
            <td className="border px-4 py-2">Type 1</td>
            <td className="border px-4 py-2">5</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Equipment 2</td>
            <td className="border px-4 py-2">Type 2</td>
            <td className="border px-4 py-2">10</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Equipment 3</td>
            <td className="border px-4 py-2">Type 1</td>
            <td className="border px-4 py-2">3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;

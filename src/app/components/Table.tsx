// This component is just something i made to show the supabase 
// tables in the website, don't pay too much attention to it

export const Table = ({ items }) => {
  const allKeys = items.reduce((keys, item) => {
    Object.keys(item).forEach((key) => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
    return keys;
  }, []);

  return (
    <table className="w-full">
      <thead>
        <tr>
          {allKeys.map((key) => (
            <th className="border-black border-2 py-1 px-2" key={key}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {allKeys.map((key) => (
              <td
                className="border-2 border-black py-1 px-2"
                key={`${index}-${key}`}
              >
                {Array.isArray(item[key]) ? (
                  item[key].map((obj, objIndex) => (
                    <div key={`${index}-${key}-${objIndex}`}>
                      {Object.values(obj).join(', ')}
                    </div>
                  ))
                ) : (
                  item[key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Test = ({ n }: { n?: number }) => {
  console.log("hi");

  const sinfyinia = (n: number) => {
    const a: number[] = [];
    let count = 0;
    for (let i = 1; i <= n / 2; i++) {
      a[2 * i - 1] = 3 * i;
      a[2 * i] = i - 1;
      count += 1;
    }
    for (let i = 1; i <= n; i++) {
      if (a[i] == n) {
        break;
      }
      count += 1;
    }
    return count;
  };


  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <table>
        {[...Array(10).keys()].map((i) => {
          const calc = sinfyinia(i + 1);
          const n = i + 1;
          return (
            <tr className="text-3xl">
              <th>n = {n}</th>
              <th> c = {calc}</th>
              <th> ratio = {(calc / n).toFixed(4)}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Test;

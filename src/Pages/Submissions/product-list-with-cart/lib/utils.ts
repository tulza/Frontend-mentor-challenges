export const getPath = (datapath: string) => {
  const filepath = "product-list-with-cart";
  const imagepath = datapath.replace(".", filepath);
  return imagepath;
};

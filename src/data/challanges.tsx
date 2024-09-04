import PRODUCTLISTCOMPONENT from "../Pages/Submissions/product-list-with-cart/PRODUCTLISTCOMPONENT";
import QRCODECOMPONENT from "../Pages/Submissions/qr-code-component/QRCODECOMPONENT";
import Test from "../Pages/Test";

export type Challange = {
  label: string;
  path: string;
  element: React.ReactNode;
  difficulty?: "Newbie" | "Junior" | "Intermediate" | "Advanced" | "Guru";
};

export const Challanges: Challange[] = [
  { label: "qr-code-component", path: "/qr-code-component", element: <QRCODECOMPONENT />, difficulty: "Newbie" },
  { label: "Product-List-app", path: "/product-list-app", element: <PRODUCTLISTCOMPONENT />, difficulty: "Junior" },
  { label: "test", path: "/test", element: <Test />, difficulty: "Guru" },
];

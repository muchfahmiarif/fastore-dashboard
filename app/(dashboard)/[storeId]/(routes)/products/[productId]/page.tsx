import prismadb from "@/lib/prismadb";
import ProductForm from "./components/productForm";

type ProductIdProps = {
  params: {
    productId: string;
  };
};

const ProductId: React.FC<ProductIdProps> = async ({ params }) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
};

export default ProductId;

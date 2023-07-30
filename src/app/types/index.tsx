export interface ParamProps {
  params: {
    categories: string;
  };
}
interface includeItems {
  quantity: number;
  item: string;
}
export interface ProductProps {
  id: number;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: includeItems[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface CustomButtonProps {
  path: string;
  type: string;
  className?: string;
  name?: string;
}

import CarDetail from "@/components/carDetail";
import CarDetailLayout from "@/components/layout/detailLayout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface Cars {
  id: number;
  name: string;
  type: string;
  image: string;
  views: string[];
  description: string;
  capacity: number;
  steering: string;
  fuel: number;
  price: number;
  newPrice: number;
}

interface Props {
  cars: Cars[];
}

const CarDetailPage = ({ cars }: Props) => {
  const router = useRouter();
  const carID = router.query.carid;
  return (
    <CarDetailLayout>
      <CarDetail data={cars} carID={carID} />
    </CarDetailLayout>
  );
};

export default CarDetailPage;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/cars");
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
}

import CarDetail from "@/components/carDetail";
import CarDetailLayout from "@/components/layout/detailLayout";
import { useRouter } from "next/router";

interface Props {
  cars: [
    {
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
  ];
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
  const res = await fetch("http://localhost:3000/cars");
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
}

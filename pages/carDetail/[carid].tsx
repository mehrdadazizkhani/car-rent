import CarDetail from "@/components/carDetail";
import CarDetailLayout from "@/components/layout/detailLayout";
import { useRouter } from "next/router";
import { Car, Cars } from "..";

const CarDetailPage = ({ cars }: Cars) => {
  const router = useRouter();
  const carID: number =
    router.query.carid !== undefined ? +router.query.carid : 1;
  return (
    <CarDetailLayout>
      <CarDetail cars={cars} carID={carID - 1} />
    </CarDetailLayout>
  );
};

export default CarDetailPage;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/db/cars");
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
}

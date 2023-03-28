import CarDetail from "@/components/carDetail";
import CarDetailLayout from "@/components/layout/detailLayout";
import { useRouter } from "next/router";

const CarDetailPage = ({ cars }: any) => {
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
  const res = await fetch("http://localhost:8000/cars");
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
}

import LoadingImage from "@/app/assets/icons/loading.png";
import Image from "next/image";

export const Loading = () => {
  return (
    <div
      className={
        "w-6 h-6 animate-spin mx-auto flex justify-center items-center"
      }
    >
      <Image src={LoadingImage} alt="Loading image" width={24} height={24} />
    </div>
  );
};

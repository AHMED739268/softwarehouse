interface FeatureProps {
  image: string;
  title: string;
  description: string;
}
import Logo from "../assets/icon.svg?react";

const Feature = ({ image, title, description }: FeatureProps) => {
  return (
    <div className=" cardd  flex flex-col items-start">
      {/* Image */}
      {/* <Logo width={50} height={50} className="object-cover  " /> */}
      <div className=" image relative w-full  overflow-hidden">
      
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="primarycolor mt-4 text-lg font-semibold ">{title}</h3>

      {/* Description */}
      <p className=" primarycolor mt-2 text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default Feature;

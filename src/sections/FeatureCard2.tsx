interface FeatureProps {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // 👈 Add Icon prop
}

const Feature2 = ({ title, description, Icon }: FeatureProps) => {
  return (
    <div className="cardd flex flex-col items-start">
      {/* Dynamic Icon */}
      <Icon width={50} height={50} className="object-cover" />

      {/* Title */}
      <h3 className="primarycolor mt-4 text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="primarycolor mt-2 text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Feature2;

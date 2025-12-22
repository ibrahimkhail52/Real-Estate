import { useNavigate } from "react-router-dom";

const PropertyCard = ({
  id,
  imageSrc,
  title,
  description,
  price,
  beds,
  baths,
  type,
  status,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1A1A1A] cursor-pointer rounded-xl overflow-hidden flex flex-col h-full group">
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full text-white ${
            status === "sale" ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {status === "sale" ? "For Sale" : "For Rent"}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        <div className="flex gap-4 text-gray-400 text-xs mb-6 mt-auto">
          <span>🛏 {beds}</span>
          <span>🛁 {baths}</span>
          <span>🏡 {type}</span>
        </div>

        <p className="text-white font-semibold mb-4">{price}</p>

        <button
          onClick={() => {
            navigate(`/properties/${id}`);
            window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
          }}
          className="bg-[#703BF7] px-4 py-2 rounded-lg text-sm hover:bg-[#5a2eba] transition"
        >
          View Property Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

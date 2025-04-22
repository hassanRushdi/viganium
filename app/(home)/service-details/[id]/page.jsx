import { services } from "@/data/services";
import Image from "next/image";

export default function ServiceDetailsPage({ params }) {
  const { id } = params;

  const service = services.find((s) => s.id === id);

  if (!service) return <div>Service not found</div>;

  return (
    <div className=" px-6 md:px-16 py-10">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-red-500">{service.title.split(" ")[0]}</span>{" "}
        {service.title.split(" ").slice(1).join(" ")}
      </h1>

      {/* Main Image */}
      <div className="w-[85%] mx-auto ">
        <div
          className="my-6 border border-red-300 rounded-xl overflow-hidden mx-auto"
          style={{ width: "100%", height: "500px" }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <h2 className="text-xl font-semibold">{service.title}</h2>
        <p className="text-gray-600 mb-8">{service.subtitle}</p>

        {/* Steps */}
        <h3 className="text-2xl font-bold mb-4">How We Provide The Service</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-xl">
            <Image
              src="/images/services/illustration.png"
              alt="Process Illustration"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {service.steps.map((step, i) => (
              <div
                key={i}
                className="p-4 border rounded-xl hover:shadow transition-all"
              >
                <h4 className="font-semibold text-red-500">{step.title}</h4>
                <p className="text-sm text-gray-700 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Clients</h3>
          <div className="flex gap-4 items-center">
            {service.clients.map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center border p-4 rounded-full"
              >
                <Image
                  src={client.logo}
                  alt="Clutch"
                  width={60}
                  height={60}
                  className="mb-2"
                />
                <p className="text-lg font-bold">{client.rating}</p>
                <div className="text-red-500 text-sm">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

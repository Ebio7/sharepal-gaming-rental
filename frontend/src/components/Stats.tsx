export default function Stats() {
  const stats = [
    {
      value: "250Cr+",
      label: "Saved Together"
    },
    {
      value: "4.5M Kg",
      label: "CO₂e Emissions Saved"
    },
    {
      value: "100K+",
      label: "Products in Circulation"
    }
  ];

  return (
    <section className="bg-purple-600 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

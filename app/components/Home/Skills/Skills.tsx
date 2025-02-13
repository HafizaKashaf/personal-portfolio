'use client';

export default function Skills() {
  return (
    <section className="min-h-screen  flex flex-col items-center justify-center p-10 text-white">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">My Skills</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          A collection of my technical skills and expertise that I have honed over the years.
        </p>

        {/* Skills with Percentage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg font-semibold text-gray-300">
          {[
            { name: 'JavaScript', level: 90 },
            { name: 'React.js', level: 85 },
            { name: 'Next.js', level: 80 },
            { name: 'Node.js', level: 75 },
            { name: 'Tailwind CSS', level: 85 },
            { name: 'Sanity CMS', level: 70 },
            { name: 'Firebase', level: 75 },
            { name: 'MongoDB', level: 80 },
            { name: 'Express.js', level: 78 },
            { name: 'GraphQL', level: 72 },
            { name: 'TypeScript', level: 80 },
            { name: 'Git & GitHub', level: 95 }
          ].map((skill, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-2xl text-center border border-gray-700">
              <h2 className="text-yellow-400 text-xl mb-2">{skill.name}</h2>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="mt-2 text-gray-300">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

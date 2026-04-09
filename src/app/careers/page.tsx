import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - MSquare Software',
  description: 'Join MSquare Software — exciting career opportunities in software development.',
};

const jobs = [
  {
    title: 'React / Next.js Developer',
    type: 'Full Time',
    requirements: ['2+ years experience in React.js / Next.js', 'Strong knowledge of JavaScript/TypeScript', 'Experience with REST APIs and state management', 'Knowledge of Tailwind CSS / Bootstrap'],
    eligibility: ['B.E. / B.Tech in Computer Science or related field', 'Strong problem-solving skills', 'Good communication skills'],
    technologies: 'React.js, Next.js, TypeScript, Tailwind CSS, REST APIs',
  },
  {
    title: 'Node.js / Backend Developer',
    type: 'Full Time',
    requirements: ['2+ years experience in Node.js', 'Experience with MongoDB / MySQL', 'Knowledge of REST API design', 'Familiarity with Docker & cloud services'],
    eligibility: ['B.E. / B.Tech in Computer Science or related field', 'Strong analytical skills', 'Team player with good communication'],
    technologies: 'Node.js, Express, MongoDB, MySQL, Docker',
  },
  {
    title: 'Mobile App Developer',
    type: 'Full Time',
    requirements: ['2+ years experience in React Native or Flutter', 'Published apps on Play Store / App Store', 'Experience with REST APIs', 'Strong UI/UX understanding'],
    eligibility: ['B.E. / B.Tech in Computer Science or related field', 'Portfolio of published apps preferred', 'Ability to work in agile teams'],
    technologies: 'React Native, Flutter, Firebase, REST APIs',
  },
];

export default function CareersPage() {
  return (
    <>
      <section
        className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/become-partner.jpg')" }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Careers</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start border-b pb-8">
              <div>
                <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
                <p className="text-gray-500 text-sm mb-4">{job.type}</p>

                <h6 className="font-bold text-gray-700 mb-2">Requirements</h6>
                <ul className="space-y-1 mb-4">
                  {job.requirements.map((r, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700">
                      <span className="text-orange-500 text-xl mr-2">•</span>{r}
                    </li>
                  ))}
                </ul>

                <p className="mb-1"><strong className="text-gray-800">Technologies:</strong></p>
                <p className="text-gray-600 text-sm mb-4">{job.technologies}</p>

                <h6 className="font-bold text-gray-700 mb-2">Eligibility</h6>
                <ul className="space-y-1 mb-6">
                  {job.eligibility.map((e, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700">
                      <span className="text-orange-500 text-xl mr-2">•</span>{e}
                    </li>
                  ))}
                </ul>

                <button className="bg-orange-500 text-white font-bold px-5 py-3 rounded-md hover:bg-orange-600 transition-colors">
                  Apply Now
                </button>
              </div>
              <div>
                <img src="/Images/become-partner.jpg" alt="Career" className="rounded-lg w-full max-h-72 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

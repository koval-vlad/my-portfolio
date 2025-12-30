import { Box } from '@/components/ui/box';
import { FuturisticCard } from '@/components/ui/futuristic-card';
import ukrFlag from '../assets/ukr-flag.svg';
import znuImage from '../assets/ZNU.svg';

export default function FormalDegree() {
  const coursework = [
    {
      title: 'Theoretical Linguistics',
      description: "Advanced study of the English language's cognitive, functional, and pragmatic peculiarities, along with historical and theoretical grammar, lexicology, and stylistics."
    },
    {
      title: 'Literature and Culture',
      description: 'Comprehensive analysis of English and world literature, focusing on the historical development of literary theory, cultural concepts (such as the "American Dream"), and linguacultural aspects.'
    },
    {
      title: 'Translation and Interpretation',
      description: 'Intensive training in the theory and practice of translation, involving a second foreign language (French) to prepare students as professional translators and interpreters.'
    },
    {
      title: 'Academic and Research Skills',
      description: 'Specialized courses in ESL Academic Writing designed to develop research, composition, and argumentation skills for international scholarly publishing.'
    },
    {
      title: 'Pedagogy and Teaching Methodology',
      description: 'Preparation for roles as English language and world literature teachers, including modern teaching techniques and the use of technology in language acquisition.'
    }
  ];

  return (
    <div className="px-4 py-4">
      <FuturisticCard className="max-w-[600px] mx-auto">
        {/* Header with flag and text */}
        <div className="flex items-center gap-3 p-3 bg-accent">
          <img
            src={ukrFlag}
            alt="Ukrainian Flag"
            className="w-6 h-auto"
          />
          <div>
            <p className="font-bold text-foreground text-xs leading-tight">
              BA in English Language and Literature
            </p>
            <p className="font-bold text-foreground text-xs leading-tight">
              Zaporizhzhia National University (Ukraine)
            </p>
          </div>
        </div>

        {/* University Image */}
        <div className="w-full">
          <img
            src={znuImage}
            alt="Zaporizhzhia National University"
            className="w-full h-auto block"
          />
        </div>

        {/* Coursework Description */}
        <div className="p-3">
          {coursework.map((item, index) => (
            <p
              key={index}
              className={`text-left text-foreground text-xs leading-relaxed ${index < coursework.length - 1 ? 'mb-1' : ''}`}
            >
              <span className="font-bold">
                {item.title}:
              </span>{' '}
              {item.description}
            </p>
          ))}
        </div>
      </FuturisticCard>
    </div>
  );
}

import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { FuturisticCard } from '@/components/ui/futuristic-card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';
import { X } from 'lucide-react';
import usaFlag from '../assets/usa-flag.svg';
import oracleAnalyticSql from '../assets/2016-Oracle-Analytic-SQL-Data-Warehousing-large.svg';
import oracleSqlTuning from '../assets/2016-Oracle-SQL-Tuning-for-Developers-large.svg';

interface OracleCardProps {
  certificateImage: string;
  topText: string[];
  bottomText: string;
  onImageClick: (imageSrc: string) => void;
}

const OracleCard = ({ certificateImage, topText, bottomText, onImageClick }: OracleCardProps) => {
  return (
    <FuturisticCard className="w-full max-w-[400px]">
      {/* Header with flag and text */}
      <div className="flex items-center gap-3 p-3 bg-accent">
        <img
          src={usaFlag}
          alt="USA Flag"
          className="w-6 h-auto"
        />
        <div>
          {topText.map((line, index) => (
            <p
              key={index}
              className="font-bold text-foreground text-xs leading-tight"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Certificate Image */}
      <div className="w-full cursor-pointer" onClick={() => onImageClick(certificateImage)}>
        <img
          src={certificateImage}
          alt="Certificate"
          className="w-full h-auto block transition-opacity hover:opacity-80"
        />
      </div>

      {/* Bottom Text - Always Visible */}
      <div className="p-3">
        <p className="text-left text-foreground text-xs leading-relaxed">
          {bottomText}
        </p>
      </div>
    </FuturisticCard>
  );
};

export default function OracleUniversity() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  const courses = [
    {
      certificateImage: oracleAnalyticSql,
      topText: ['Oracle Analytic SQL for Data Warehousing', 'Oracle University'],
      bottomText: 'The course teaches how to use advanced SQL features to aggregate, analyze, and model large datasets, focusing on operators like ROLLUP and CUBE and analytic functions such as LAG/LEAD and Ranking. It ensures you master complex data manipulation techniques, including hierarchical retrieval, pivoting operations, and advanced pattern matching using the MODEL and MATCH_RECOGNIZE clauses.'
    },
    {
      certificateImage: oracleSqlTuning,
      topText: ['Oracle SQL Tuning for Developers', 'Oracle University'],
      bottomText: 'The course teaches how to identify and optimize inefficient SQL by mastering the Query Optimizer, interpreting execution plans, and managing optimizer statistics. It allows gaining hands-on experience with Oracle diagnostic tools, such as Automatic SQL Tuning and Real Time SQL monitoring, while learning advanced techniques like application tracing and bind variable usage to ensure high-performance data access.'
    }
  ];

  return (
    <div className="px-2 py-4">
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.map((course, index) => (
          <OracleCard
            key={index}
            certificateImage={course.certificateImage}
            topText={course.topText}
            bottomText={course.bottomText}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={modalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-2xl max-h-[160vh] p-0">
          <div className="relative min-h-[250px] bg-background rounded-lg overflow-hidden">
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-card/90 hover:bg-card shadow-sm z-10 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Large image */}
            <div className="flex items-center justify-center p-4 min-h-[250px]">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Certificate"
                  className="max-w-full max-h-full object-contain rounded shadow-lg"
                />
              ) : (
                <p className="text-muted-foreground">Loading image...</p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

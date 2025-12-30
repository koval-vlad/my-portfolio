import { FuturisticCard } from '@/components/ui/futuristic-card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { X } from 'lucide-react';
import usaFlag from '../assets/usa-flag.svg';

// Import all certificate images
import activeServerPagesSmall from '../assets/2000-Active-Server-Pages-small.svg';
import activeServerPagesLarge from '../assets/2000-Active-Server-Pages-large.svg';
import javaServerPagesSmall from '../assets/2001-Java-Server-Pages-small.svg';
import javaServerPagesLarge from '../assets/2001-Java-Server-Pages-large.svg';
import visualStudioSmall from '../assets/2011-Visual-Studio-small.svg';
import visualStudioLarge from '../assets/2011-Visual-Studio-large.svg';
import businessAnalysisSmall from '../assets/2014-Business-Analysis-small.svg';
import businessAnalysisLarge from '../assets/2014-Business-Analysis-large.svg';

interface OtherEducationCardProps {
  certificateImage: string;
  certificateImageLarge: string;
  topText: string[];
  bottomText: string;
  onImageClick: (imageSrc: string) => void;
}

const OtherEducationCard = ({ certificateImage, certificateImageLarge, topText, bottomText, onImageClick }: OtherEducationCardProps) => {
  return (
    <FuturisticCard className="w-full max-w-[250px]">
      {/* Header with flag and text */}
      <div className="flex items-center gap-2 p-2 bg-accent">
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
      <div className="w-full cursor-pointer" onClick={() => onImageClick(certificateImageLarge)}>
        <img
          src={certificateImage}
          alt="Certificate"
          className="w-full h-auto block transition-opacity hover:opacity-80"
        />
      </div>

      {/* Bottom Text - Always Visible */}
      <div className="p-2">
        <p className="text-left text-foreground text-sm leading-relaxed">
          {bottomText}
        </p>
      </div>
    </FuturisticCard>
  );
};

const courses = [
  {
    certificateImage: activeServerPagesSmall,
    certificateImageLarge: activeServerPagesLarge,
    topText: ['Active Server Pages Training', 'Creative Data'],
    bottomText: 'The course teaches the fundamentals of building dynamic, server-side web applications using classic ASP. It covers core concepts such as the ASP object model (Request, Response, and Session objects), scripting with VBScript, and utilizing ActiveX Data Objects (ADO) for database connectivity and manipulation.',
  },
  {
    certificateImage: javaServerPagesSmall,
    certificateImageLarge: javaServerPagesLarge,
    topText: ['Introduction to Java Server Pages', 'West Lake Internet Training'],
    bottomText: 'The course provides a foundational overview of using JSP to create dynamic, data-driven web applications by embedding Java code within HTML. Key concepts include mastering JSP syntax - such as scriptlets, expressions, and declarations - while exploring the integration of JavaBeans, custom tag libraries, and database connectivity.',
  },
  {
    certificateImage: visualStudioSmall,
    certificateImageLarge: visualStudioLarge,
    topText: ['Testers Training Using Visual Studio Ultimate', 'Notion Solutions'],
    bottomText: 'The course provides a comprehensive look at the application lifecycle with a specific focus on the tools available to testers in the Visual Studio Ultimate release. Key concepts include creating and managing test plans and cases, executing manual and exploratory tests, and utilizing Microsoft Test Manager (MTM) for bug filing and tracking within Team Foundation Server.',
  },
  {
    certificateImage: businessAnalysisSmall,
    certificateImageLarge: businessAnalysisLarge,
    topText: ['Business Analysis Boot Camp', 'Corporate Education Group'],
    bottomText: 'The boot camp provides an intensive, practical foundation in business analysis aligned with industry standards like the BABOK® Guide. The course covers essential techniques for eliciting and documenting requirements, analyzing stakeholders, and modeling business processes using both predictive (Waterfall) and adaptive (Agile) approaches.',
  },
];

export default function OtherEducation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="px-2 py-4">
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.map((course, index) => (
          <OtherEducationCard
            key={index}
            certificateImage={course.certificateImage}
            certificateImageLarge={course.certificateImageLarge}
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

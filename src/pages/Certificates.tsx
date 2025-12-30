import { FuturisticCard } from '@/components/ui/futuristic-card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { useState } from 'react';
import { X } from 'lucide-react';
import usaFlag from '../assets/usa-flag.svg';
import clsImage from '../assets/1998-Computer-Learning-Center-large.svg';

interface CertificateCardProps {
  certificateImage: string;
  topText: string[];
  bottomText: string;
  onImageClick: (imageSrc: string) => void;
}

const CertificateCard = ({ certificateImage, topText, bottomText, onImageClick }: CertificateCardProps) => {
  return (
    <FuturisticCard className="w-full max-w-[500px]">
      {/* Header with flag and text */}
      <div className="flex items-center gap-2 p-2 bg-accent">
        <img
          src={usaFlag}
          alt="USA Flag"
          className="w-8 h-auto"
        />
        <div>
          {topText.map((line, index) => (
            <p
              key={index}
              className="font-bold text-foreground text-sm leading-tight"
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
      <div className="p-2">
        <Typography variant="certificate">
          {bottomText}
        </Typography>
      </div>
    </FuturisticCard>
  );
};

export default function Certificates() {
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

  const certificates = [
    {
      certificateImage: clsImage,
      topText: ['Certificate in Kubernetes with Cloud and Data Science', 'UNIQUE System Skills LLC (USA)'],
      bottomText: 'Tableau: Transformed raw data into actionable insights by creating professional, interactive dashboards and various chart types for business intelligence reporting. Python: Learned the fundamentals of Python programming, including core syntax, data structures, and the development of scripts to solve real-world problems or automate tasks. Data Science with Python: Focused on using specialized libraries like NumPy and Pandas to manipulate, clean, and visualize complex datasets while introducing core machine learning techniques. AWS Solution Architect: Gained proficiency in designing and deploying scalable, cost-effective, and highly available cloud infrastructures using the Amazon Web Services Well-Architected Framework. Docker Certified Associate: Focused on the fundamentals of containerization, including building images, managing storage and networking, and orchestrating multi-container deployments. Kubernetes: Gained knowledge to design, deploy, and manage containerized applications at scale using cluster setup, services, controllers, and monitoring tools.'
    },
    {
      certificateImage: clsImage,
      topText: ['Certificate in Contemporary Application Development', 'Computer Learning Center (USA)'],
      bottomText: 'Object-Oriented Programming (OOP): Fundamental principles including classes, inheritance, polymorphism, and encapsulation used in Visual Basic and C++. Database Integration: Connecting applications to data sources using SQL and database management systems (DBMS). Graphical User Interface (GUI) Design: Creating visual components for Windows-based applications in Visual Basic and C++. Software Development Life Cycle (SDLC): Standard phases of development including requirement analysis, design, coding, testing, and deployment. Programming under various operating systems: C programming under Unix, DOS commands.'
    }
  ];

  return (
    <div className="px-2 py-4">
      <div className="flex flex-wrap gap-6 justify-center">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            certificateImage={certificate.certificateImage}
            topText={certificate.topText}
            bottomText={certificate.bottomText}
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


import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Image, Video, Music, AlertCircle } from "lucide-react";
import ComingSoonPopup from "@/components/feedback/ComingSoonPopup";

const MediaGeneratePage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = React.useState(false);

  const mediaTypes = [
    {
      title: "AI Image Generation",
      description: "Generate high-quality images from text descriptions using advanced AI models.",
      icon: <Image className="h-8 w-8 text-primary" />,
      features: ["Custom prompts", "Multiple styles", "High resolution", "Commercial use"]
    },
    {
      title: "AI Video Creation",
      description: "Create engaging videos with AI-powered scene generation and editing.",
      icon: <Video className="h-8 w-8 text-primary" />,
      features: ["Text-to-video", "Scene transitions", "Custom duration", "Multiple formats"]
    },
    {
      title: "AI Audio Generation",
      description: "Generate background music, sound effects, and voiceovers with AI.",
      icon: <Music className="h-8 w-8 text-primary" />,
      features: ["Music generation", "Voice synthesis", "Sound effects", "Multiple genres"]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">AI Media Generation</h1>
        <p className="text-muted-foreground">
          Create stunning visual and audio content with AI-powered generation tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mediaTypes.map((type, index) => (
          <Card key={index} className="glass-card border-white/10 hover:border-primary/20 transition-all">
            <CardHeader>
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4 w-fit">
                {type.icon}
              </div>
              <CardTitle className="text-xl">{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{type.description}</p>
              <ul className="space-y-2 mb-6">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                onClick={() => setShowComingSoon(true)}
              >
                <Wand2 className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card border-amber-500/20 bg-amber-500/5">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-amber-500 mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                AI-powered media generation features are currently in development. We're working hard to bring you 
                cutting-edge AI tools for creating images, videos, and audio content. Stay tuned for updates!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <ComingSoonPopup 
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="AI Media Generation"
        description="We're developing powerful AI tools for image, video, and audio generation. This feature will be available soon!"
      />
    </div>
  );
};

export default MediaGeneratePage;

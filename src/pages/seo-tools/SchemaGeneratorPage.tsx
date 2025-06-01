
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, FileCode, Wand2 } from "lucide-react";
import { toast } from "sonner";

const SchemaGeneratorPage: React.FC = () => {
  const [schemaType, setSchemaType] = React.useState('');
  const [generatedSchema, setGeneratedSchema] = React.useState('');
  const [businessName, setBusinessName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const schemaTypes = [
    { value: 'organization', label: 'Organization' },
    { value: 'local-business', label: 'Local Business' },
    { value: 'article', label: 'Article' },
    { value: 'product', label: 'Product' },
    { value: 'faq', label: 'FAQ Page' },
    { value: 'breadcrumb', label: 'Breadcrumb' },
    { value: 'review', label: 'Review' },
    { value: 'event', label: 'Event' }
  ];

  const generateSchema = () => {
    if (!schemaType) {
      toast.error("Please select a schema type");
      return;
    }

    let schema = {};

    switch (schemaType) {
      case 'organization':
        schema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": businessName || "Your Business Name",
          "description": description || "Your business description",
          "url": "https://yourwebsite.com",
          "logo": "https://yourwebsite.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service"
          }
        };
        break;
      case 'local-business':
        schema = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": businessName || "Your Local Business",
          "description": description || "Your local business description",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "Your City",
            "addressRegion": "Your State",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-555-123-4567",
          "openingHours": ["Mo-Fr 09:00-17:00", "Sa 09:00-12:00"]
        };
        break;
      case 'article':
        schema = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": businessName || "Your Article Title",
          "description": description || "Your article description",
          "author": {
            "@type": "Person",
            "name": "Author Name"
          },
          "datePublished": new Date().toISOString().split('T')[0],
          "dateModified": new Date().toISOString().split('T')[0],
          "image": "https://yourwebsite.com/article-image.jpg"
        };
        break;
      default:
        schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": businessName || "Page Title",
          "description": description || "Page description"
        };
    }

    setGeneratedSchema(JSON.stringify(schema, null, 2));
    toast.success("Schema markup generated successfully!");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSchema);
    toast.success("Schema copied to clipboard!");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Schema Generator</h1>
        <p className="text-muted-foreground">
          Generate structured data markup to help search engines understand your content better.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileCode className="h-5 w-5 mr-2" />
              Schema Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="schema-type">Schema Type</Label>
              <Select value={schemaType} onValueChange={setSchemaType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select schema type" />
                </SelectTrigger>
                <SelectContent>
                  {schemaTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="business-name">Name/Title</Label>
              <Input
                id="business-name"
                placeholder="Enter name or title"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>

            <Button onClick={generateSchema} className="w-full">
              <Wand2 className="h-4 w-4 mr-2" />
              Generate Schema (Costs 1 AI Call)
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Generated Schema</CardTitle>
            {generatedSchema && (
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {generatedSchema ? (
              <div>
                <Textarea
                  value={generatedSchema}
                  readOnly
                  className="font-mono text-sm min-h-[400px]"
                />
                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Implementation</h4>
                  <p className="text-sm text-muted-foreground">
                    Copy the generated JSON-LD code and paste it in the &lt;head&gt; section of your HTML 
                    within &lt;script type="application/ld+json"&gt; tags.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
                Select a schema type and click generate to see the markup
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchemaGeneratorPage;

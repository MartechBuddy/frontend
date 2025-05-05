
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText } from "lucide-react";

const LicensesSettings = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Licenses</h1>
        <p className="text-muted-foreground">
          View third-party licenses and open source notices
        </p>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="flex items-center">
              <BookOpenText className="mr-2 h-5 w-5 text-primary" />
              MIT Licenses
            </CardTitle>
            <CardDescription>
              Open source licenses used in MartechEngine
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-md">
              <h3 className="font-medium mb-2">React</h3>
              <p className="text-sm text-muted-foreground">
                MIT License<br />
                Copyright (c) Meta Platforms, Inc. and affiliates.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-md">
              <h3 className="font-medium mb-2">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                MIT License<br />
                Copyright (c) Tailwind Labs, Inc.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-md">
              <h3 className="font-medium mb-2">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground">
                MIT License<br />
                Copyright (c) 2023 shadcn
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-md">
              <h3 className="font-medium mb-2">Lucide Icons</h3>
              <p className="text-sm text-muted-foreground">
                ISC License<br />
                Copyright (c) 2020, Lucide Contributors
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-md">
              <h3 className="font-medium mb-2">Recharts</h3>
              <p className="text-sm text-muted-foreground">
                MIT License<br />
                Copyright (c) 2015-present recharts
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LicensesSettings;

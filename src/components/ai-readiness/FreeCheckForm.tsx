
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, AlertCircle, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

const urlSchema = z.object({
  url: z.string().url({ message: "Please enter a valid website URL" })
    .refine(url => !url.endsWith('/'), {
      message: "Please remove trailing slash from URL"
    })
});

type UrlFormValues = z.infer<typeof urlSchema>;

type CheckStatus = 'idle' | 'loading' | 'error' | 'success' | 'limit-reached';

const FreeCheckForm: React.FC = () => {
  const [status, setStatus] = useState<CheckStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<UrlFormValues>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: ''
    }
  });

  const onSubmit = async (data: UrlFormValues) => {
    setStatus('loading');
    setProgress(0);
    setError(null);
    
    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 5;
      });
    }, 300);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Randomly simulate different results for demo purposes
      const random = Math.random();
      if (random > 0.8) {
        setStatus('limit-reached');
        setError('Daily limit reached. Try again tomorrow or sign up for unlimited checks.');
      } else {
        clearInterval(progressInterval);
        setProgress(100);
        setStatus('success');
        // In a real app, we'd redirect to results page or update state with results
      }
    } catch (err) {
      clearInterval(progressInterval);
      setStatus('error');
      setError('Could not process your request. Please try again or contact support.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex">
                    <Input
                      placeholder="Enter your website URL (e.g., yourcompany.com)"
                      className="rounded-r-none"
                      disabled={status === 'loading'}
                      {...field}
                    />
                    <Button 
                      type="submit" 
                      className="rounded-l-none px-4"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="text-xs text-muted-foreground">
            1 check per IP address per day. No data stored. Sign up for unlimited analysis.
          </div>
          
          {status === 'loading' && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Analyzing your website...</span>
                <span>{progress}%</span>
              </div>
            </div>
          )}
          
          {(status === 'error' || status === 'limit-reached') && error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {status === 'success' && (
            <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
              <Check className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Analysis complete! Redirecting to your results...
              </AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </div>
  );
};

export default FreeCheckForm;

import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, BarChart3, Lock, Share2, Clock, Smartphone } from 'lucide-react';

export default async function Home() {
  const { userId } = await auth();
  
  if (userId) {
    redirect('/dashboard');
  }
  
  const features = [
    {
      icon: Zap,
      title: 'Instant Shortening',
      description: 'Convert long URLs into short, memorable links in seconds',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track clicks, geographic data, and engagement metrics in real-time',
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected with enterprise-grade security',
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Copy links with one click and share across all your platforms',
    },
    {
      icon: Clock,
      title: 'Expiration Control',
      description: 'Set expiration dates and custom validity periods for your links',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Full-featured mobile experience with native app-like performance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Shorten Your Links,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Amplify Your Impact
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-zinc-400">
            Create short, shareable links in seconds. Track clicks, analyze engagement, and grow your online presence with our powerful link shortening platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <SignUpButton mode="modal">
              <Button size="lg" className="text-base h-12 px-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                Get Started Free
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="outline" className="text-base h-12 px-8">
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-zinc-400 text-lg">Everything you need to manage and optimize your links</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="bg-zinc-800 border-zinc-700 hover:border-zinc-500 transition-colors">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-lg p-12 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to get started?</h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Join thousands of users who are simplifying their link management and tracking engagement with precision.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" className="text-base h-12 px-8 bg-white text-black hover:bg-zinc-100">
              Create Your First Link
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 mt-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center text-zinc-400">
            <p>&copy; 2025 LinkShortener. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

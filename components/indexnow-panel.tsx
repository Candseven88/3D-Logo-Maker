"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useIndexNow } from '@/hooks/use-indexnow';
import { 
  Search, 
  Globe, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  RefreshCw,
  Send,
  Settings,
  BarChart3
} from 'lucide-react';

export function IndexNowPanel() {
  const {
    isSubmitting,
    error,
    success,
    submitUrls,
    submitCurrentPage,
    submitAllPages,
    submitCorePages,
    clearStatus
  } = useIndexNow();

  const [customUrls, setCustomUrls] = useState('');
  const [config, setConfig] = useState<any>(null);
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    lastSubmission: null as string | null,
    successRate: 100
  });

  // Load configuration
  useEffect(() => {
    fetch('/api/indexnow?action=config')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setConfig(data.config);
        }
      })
      .catch(console.error);
  }, []);

  const handleCustomSubmit = async () => {
    const urls = customUrls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);
    
    if (urls.length > 0) {
      await submitUrls(urls);
      setCustomUrls('');
    }
  };

  const quickActions = [
    {
      title: 'Current Page',
      description: 'Submit the current page',
      icon: <Globe className="h-4 w-4" />,
      action: submitCurrentPage,
      badge: 'Quick'
    },
    {
      title: 'Core Pages',
      description: 'Submit all core pages',
      icon: <Search className="h-4 w-4" />,
      action: submitCorePages,
      badge: 'Recommended'
    },
    {
      title: 'All Pages',
      description: 'Submit all website pages',
      icon: <RefreshCw className="h-4 w-4" />,
      action: submitAllPages,
      badge: 'Complete'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">IndexNow Management</h1>
        <p className="text-muted-foreground">
          Manage search engine indexing and boost your site's visibility
        </p>
      </div>

      {/* Status Alert */}
      {(error || success) && (
        <Alert className={success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
          {success ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription className={success ? "text-green-800" : "text-red-800"}>
            {success ? "✅ URLs submitted successfully to search engines!" : `❌ ${error}`}
          </AlertDescription>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearStatus}
            className="ml-auto"
          >
            ×
          </Button>
        </Alert>
      )}

      <Tabs defaultValue="quick" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="quick">Quick Actions</TabsTrigger>
          <TabsTrigger value="custom">Custom URLs</TabsTrigger>
          <TabsTrigger value="config">Configuration</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="quick" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {action.icon}
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                    </div>
                    <Badge variant="secondary">{action.badge}</Badge>
                  </div>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={action.action}
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Now
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submit Custom URLs</CardTitle>
              <CardDescription>
                Enter specific URLs to submit to search engines (one per line)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="urls">URLs to Submit</Label>
                <textarea
                  id="urls"
                  className="w-full h-32 p-3 border rounded-md resize-none"
                  placeholder={`/new-feature\n/updated-page\nhttps://3dlogo.site/special-page`}
                  value={customUrls}
                  onChange={(e) => setCustomUrls(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleCustomSubmit}
                disabled={isSubmitting || !customUrls.trim()}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting URLs...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Custom URLs
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="config" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                IndexNow Configuration
              </CardTitle>
              <CardDescription>
                Current IndexNow setup and verification status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {config ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Host</Label>
                    <code className="bg-muted px-2 py-1 rounded text-sm">{config.host}</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <Label>Key Status</Label>
                    <Badge variant={config.hasKey ? "default" : "destructive"}>
                      {config.hasKey ? "✅ Configured" : "❌ Missing"}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <Label>Key Location</Label>
                    <a 
                      href={config.keyLocation} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {config.keyLocation}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading configuration...
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Submission Statistics
              </CardTitle>
              <CardDescription>
                Track your IndexNow submission history and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{stats.totalSubmissions}</div>
                  <div className="text-sm text-muted-foreground">Total Submissions</div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.successRate}%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {stats.lastSubmission || 'Never'}
                  </div>
                  <div className="text-sm text-muted-foreground">Last Submission</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Information Card */}
      <Card>
        <CardHeader>
          <CardTitle>About IndexNow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            IndexNow is a protocol that allows websites to instantly notify search engines 
            about latest content changes. This helps search engines discover your content 
            faster and improve your site's visibility in search results.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline">Bing</Badge>
            <Badge variant="outline">Yandex</Badge>
            <Badge variant="outline">Seznam</Badge>
            <Badge variant="outline">Naver</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
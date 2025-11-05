"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  BookOpen,
  Lightbulb,
  AlertCircle,
  Calendar,
  Clock,
  ArrowRight,
  Bookmark,
  Share2,
} from "lucide-react"

interface ContentItem {
  id: string
  type: "tip" | "news" | "case-study" | "update"
  title: string
  description: string
  content: string
  category: string
  readTime: number
  publishedAt: string
  trending: boolean
  bookmarked: boolean
}

interface DynamicContentFeedProps {
  userNiche?: string
  userGoals?: string[]
}

export function DynamicContentFeed({ userNiche = "general", userGoals = [] }: DynamicContentFeedProps) {
  const [content, setContent] = useState<ContentItem[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Generate dynamic content based on user profile
    const generateContent = (): ContentItem[] => {
      const baseContent: ContentItem[] = [
        {
          id: "1",
          type: "tip",
          title: "Optimize Ad Placement for Higher CTR",
          description:
            "Learn the best practices for ad placement that can increase your click-through rates by up to 40%.",
          content:
            "Strategic ad placement is crucial for maximizing your AdSense revenue. Place ads above the fold, within content, and at natural break points...",
          category: "optimization",
          readTime: 3,
          publishedAt: "2024-01-15",
          trending: true,
          bookmarked: false,
        },
        {
          id: "2",
          type: "news",
          title: "Google AdSense Policy Updates - January 2024",
          description: "Important changes to AdSense policies that affect content creators and website owners.",
          content:
            "Google has announced several policy updates that will take effect in February 2024. Key changes include...",
          category: "policy",
          readTime: 5,
          publishedAt: "2024-01-10",
          trending: false,
          bookmarked: false,
        },
        {
          id: "3",
          type: "case-study",
          title: "How a Travel Blog Increased RPM by 300%",
          description:
            "Real-world case study showing optimization strategies that tripled revenue per thousand impressions.",
          content:
            "This travel blog implemented a comprehensive optimization strategy that resulted in significant revenue growth...",
          category: "case-study",
          readTime: 8,
          publishedAt: "2024-01-08",
          trending: true,
          bookmarked: false,
        },
        {
          id: "4",
          type: "tip",
          title: "Mobile Optimization for Better Ad Performance",
          description: "Essential mobile optimization techniques to improve ad viewability and user experience.",
          content: "With mobile traffic accounting for over 60% of web traffic, optimizing for mobile is crucial...",
          category: "mobile",
          readTime: 4,
          publishedAt: "2024-01-05",
          trending: false,
          bookmarked: false,
        },
        {
          id: "5",
          type: "update",
          title: "New AdSense Features: Auto Ads 2.0",
          description: "Explore the latest Auto Ads features and how they can simplify your ad management.",
          content:
            "Google has released Auto Ads 2.0 with improved machine learning algorithms and better placement optimization...",
          category: "features",
          readTime: 6,
          publishedAt: "2024-01-03",
          trending: true,
          bookmarked: false,
        },
      ]

      // Add niche-specific content
      if (userNiche === "finance") {
        baseContent.push({
          id: "6",
          type: "tip",
          title: "Finance Niche: High-Value Keywords for Better CPC",
          description: "Discover the most profitable keywords in the finance niche that can boost your earnings.",
          content: "Finance websites can achieve higher CPCs by targeting specific high-value keywords...",
          category: "niche-specific",
          readTime: 5,
          publishedAt: "2024-01-12",
          trending: true,
          bookmarked: false,
        })
      }

      if (userNiche === "technology") {
        baseContent.push({
          id: "7",
          type: "case-study",
          title: "Tech Blog Success: Native Ads vs Display Ads",
          description: "Comparison study showing performance differences between ad formats in tech content.",
          content: "A comprehensive analysis of ad format performance on technology websites...",
          category: "niche-specific",
          readTime: 7,
          publishedAt: "2024-01-11",
          trending: false,
          bookmarked: false,
        })
      }

      // Add goal-specific content
      if (userGoals.includes("Increase RPM")) {
        baseContent.push({
          id: "8",
          type: "tip",
          title: "Advanced RPM Optimization Strategies",
          description: "Proven techniques to maximize your revenue per thousand impressions.",
          content:
            "RPM optimization requires a multi-faceted approach including ad placement, content quality, and user experience...",
          category: "goal-specific",
          readTime: 6,
          publishedAt: "2024-01-14",
          trending: true,
          bookmarked: false,
        })
      }

      if (userGoals.includes("Optimize CTR")) {
        baseContent.push({
          id: "9",
          type: "tip",
          title: "CTR Optimization: A/B Testing Guide",
          description: "Step-by-step guide to A/B testing your ad placements for better click-through rates.",
          content: "A/B testing is essential for CTR optimization. Here's how to set up effective tests...",
          category: "goal-specific",
          readTime: 8,
          publishedAt: "2024-01-13",
          trending: false,
          bookmarked: false,
        })
      }

      return baseContent.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    }

    setContent(generateContent())

    // Load bookmarked items from localStorage
    const saved = localStorage.getItem("adsense-calculator-bookmarks")
    if (saved) {
      setBookmarkedItems(new Set(JSON.parse(saved)))
    }
  }, [userNiche, userGoals])

  const toggleBookmark = (itemId: string) => {
    const newBookmarks = new Set(bookmarkedItems)
    if (newBookmarks.has(itemId)) {
      newBookmarks.delete(itemId)
    } else {
      newBookmarks.add(itemId)
    }
    setBookmarkedItems(newBookmarks)
    localStorage.setItem("adsense-calculator-bookmarks", JSON.stringify([...newBookmarks]))
  }

  const filteredContent = content.filter((item) => {
    if (activeTab === "all") return true
    if (activeTab === "trending") return item.trending
    if (activeTab === "bookmarked") return bookmarkedItems.has(item.id)
    return item.type === activeTab
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tip":
        return <Lightbulb className="h-4 w-4" />
      case "news":
        return <AlertCircle className="h-4 w-4" />
      case "case-study":
        return <TrendingUp className="h-4 w-4" />
      case "update":
        return <BookOpen className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "tip":
        return "text-primary"
      case "news":
        return "text-secondary"
      case "case-study":
        return "text-accent"
      case "update":
        return "text-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="glass-effect p-6 rounded-2xl border border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-heading">Personalized Content Feed</h2>
            <p className="text-sm text-muted-foreground font-body">
              Curated content based on your {userNiche} niche and optimization goals
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all" className="font-display">
              All
            </TabsTrigger>
            <TabsTrigger value="trending" className="font-display">
              Trending
            </TabsTrigger>
            <TabsTrigger value="tip" className="font-display">
              Tips
            </TabsTrigger>
            <TabsTrigger value="news" className="font-display">
              News
            </TabsTrigger>
            <TabsTrigger value="case-study" className="font-display">
              Cases
            </TabsTrigger>
            <TabsTrigger value="bookmarked" className="font-display">
              Saved
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-4">
              {filteredContent.map((item) => (
                <Card
                  key={item.id}
                  className="glass-effect border-border/50 hover:scale-[1.02] transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`${getTypeColor(item.type)}`}>{getTypeIcon(item.type)}</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-heading">{item.title}</CardTitle>
                            {item.trending && (
                              <Badge variant="secondary" className="text-xs font-display">
                                Trending
                              </Badge>
                            )}
                            {item.category === "niche-specific" && (
                              <Badge variant="outline" className="text-xs font-display">
                                {userNiche}
                              </Badge>
                            )}
                            {item.category === "goal-specific" && (
                              <Badge variant="outline" className="text-xs font-display">
                                Goal-based
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="font-body">{item.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleBookmark(item.id)}
                          className={bookmarkedItems.has(item.id) ? "text-primary" : "text-muted-foreground"}
                        >
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.readTime} min read
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(item.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="font-display">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredContent.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-heading mb-2">No content found</h3>
                <p className="text-muted-foreground font-body">
                  {activeTab === "bookmarked"
                    ? "You haven't bookmarked any content yet. Start exploring and save interesting articles!"
                    : "No content available for this filter. Try selecting a different category."}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

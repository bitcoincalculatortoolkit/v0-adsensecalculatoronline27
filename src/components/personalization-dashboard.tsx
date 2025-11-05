"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { User, Settings, Target, TrendingUp, Palette, Moon, Sun } from "lucide-react"

interface UserProfile {
  name: string
  website: string
  niche: string
  geography: string
  monthlyViews: string
  goals: string[]
  preferences: {
    theme: "light" | "dark" | "auto"
    notifications: boolean
    autoSave: boolean
    currency: string
    language: string
  }
}

interface PersonalizationDashboardProps {
  onProfileUpdate?: (profile: UserProfile) => void
}

export function PersonalizationDashboard({ onProfileUpdate }: PersonalizationDashboardProps) {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    website: "",
    niche: "general",
    geography: "us",
    monthlyViews: "",
    goals: [],
    preferences: {
      theme: "auto",
      notifications: true,
      autoSave: true,
      currency: "USD",
      language: "en",
    },
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Load saved profile from localStorage
    const savedProfile = localStorage.getItem("adsense-calculator-profile")
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile)
        setProfile(parsed)
      } catch (error) {
        console.error("Failed to parse saved profile:", error)
      }
    }
    setIsVisible(true)
  }, [])

  const saveProfile = () => {
    localStorage.setItem("adsense-calculator-profile", JSON.stringify(profile))
    onProfileUpdate?.(profile)
  }

  const updateProfile = (updates: Partial<UserProfile>) => {
    const newProfile = { ...profile, ...updates }
    setProfile(newProfile)
    localStorage.setItem("adsense-calculator-profile", JSON.stringify(newProfile))
    onProfileUpdate?.(newProfile)
  }

  const updatePreferences = (updates: Partial<UserProfile["preferences"]>) => {
    const newProfile = {
      ...profile,
      preferences: { ...profile.preferences, ...updates },
    }
    setProfile(newProfile)
    localStorage.setItem("adsense-calculator-profile", JSON.stringify(newProfile))
    onProfileUpdate?.(newProfile)
  }

  const toggleGoal = (goal: string) => {
    const newGoals = profile.goals.includes(goal) ? profile.goals.filter((g) => g !== goal) : [...profile.goals, goal]
    updateProfile({ goals: newGoals })
  }

  const availableGoals = [
    "Increase RPM",
    "Optimize CTR",
    "Expand to new geos",
    "Diversify ad formats",
    "Improve user experience",
    "Scale content production",
    "A/B test ad placements",
    "Monitor competitors",
  ]

  if (!isVisible) return null

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="glass-effect p-6 rounded-2xl border border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-heading">Personalization Dashboard</h2>
            <p className="text-sm text-muted-foreground font-body">Customize your AdSense calculator experience</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="font-display">
              Profile
            </TabsTrigger>
            <TabsTrigger value="goals" className="font-display">
              Goals
            </TabsTrigger>
            <TabsTrigger value="preferences" className="font-display">
              Settings
            </TabsTrigger>
            <TabsTrigger value="insights" className="font-display">
              Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <User className="h-5 w-5 text-primary" />
                  Basic Information
                </CardTitle>
                <CardDescription className="font-body">Tell us about yourself and your website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-display">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={profile.name}
                      onChange={(e) => updateProfile({ name: e.target.value })}
                      className="font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="font-display">
                      Website URL
                    </Label>
                    <Input
                      id="website"
                      placeholder="https://example.com"
                      value={profile.website}
                      onChange={(e) => updateProfile({ website: e.target.value })}
                      className="font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="font-display">Website Niche</Label>
                    <Select value={profile.niche} onValueChange={(value) => updateProfile({ niche: value })}>
                      <SelectTrigger className="font-body">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="health">Health & Wellness</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-display">Primary Geography</Label>
                    <Select value={profile.geography} onValueChange={(value) => updateProfile({ geography: value })}>
                      <SelectTrigger className="font-body">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="global">Global</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-views" className="font-display">
                      Monthly Page Views
                    </Label>
                    <Input
                      id="monthly-views"
                      placeholder="100000"
                      value={profile.monthlyViews}
                      onChange={(e) => updateProfile({ monthlyViews: e.target.value })}
                      className="font-body"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6 mt-6">
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Target className="h-5 w-5 text-primary" />
                  Monetization Goals
                </CardTitle>
                <CardDescription className="font-body">
                  Select your primary objectives for AdSense optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {availableGoals.map((goal) => (
                    <div
                      key={goal}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        profile.goals.includes(goal)
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-muted/50 border-border hover:bg-muted"
                      }`}
                      onClick={() => toggleGoal(goal)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm">{goal}</span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            profile.goals.includes(goal) ? "bg-primary border-primary" : "border-muted-foreground"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {profile.goals.length > 0 && (
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-display text-sm font-semibold mb-2">Selected Goals:</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.goals.map((goal) => (
                        <Badge key={goal} variant="secondary" className="font-display">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6 mt-6">
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  Application Preferences
                </CardTitle>
                <CardDescription className="font-body">Customize how the calculator works for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="font-display">Theme Preference</Label>
                        <p className="text-xs text-muted-foreground font-body">Choose your preferred color scheme</p>
                      </div>
                      <Select
                        value={profile.preferences.theme}
                        onValueChange={(value: "light" | "dark" | "auto") => updatePreferences({ theme: value })}
                      >
                        <SelectTrigger className="w-32 font-body">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">
                            <div className="flex items-center gap-2">
                              <Sun className="h-4 w-4" />
                              Light
                            </div>
                          </SelectItem>
                          <SelectItem value="dark">
                            <div className="flex items-center gap-2">
                              <Moon className="h-4 w-4" />
                              Dark
                            </div>
                          </SelectItem>
                          <SelectItem value="auto">
                            <div className="flex items-center gap-2">
                              <Palette className="h-4 w-4" />
                              Auto
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="font-display">Push Notifications</Label>
                        <p className="text-xs text-muted-foreground font-body">Get notified about updates and tips</p>
                      </div>
                      <Switch
                        checked={profile.preferences.notifications}
                        onCheckedChange={(checked) => updatePreferences({ notifications: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="font-display">Auto-save Calculations</Label>
                        <p className="text-xs text-muted-foreground font-body">Automatically save your calculations</p>
                      </div>
                      <Switch
                        checked={profile.preferences.autoSave}
                        onCheckedChange={(checked) => updatePreferences({ autoSave: checked })}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="font-display">Currency Display</Label>
                      <Select
                        value={profile.preferences.currency}
                        onValueChange={(value) => updatePreferences({ currency: value })}
                      >
                        <SelectTrigger className="font-body">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD ($)</SelectItem>
                          <SelectItem value="EUR">EUR (€)</SelectItem>
                          <SelectItem value="GBP">GBP (£)</SelectItem>
                          <SelectItem value="CAD">CAD (C$)</SelectItem>
                          <SelectItem value="AUD">AUD (A$)</SelectItem>
                          <SelectItem value="INR">INR (₹)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-display">Language</Label>
                      <Select
                        value={profile.preferences.language}
                        onValueChange={(value) => updatePreferences({ language: value })}
                      >
                        <SelectTrigger className="font-body">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="it">Italiano</SelectItem>
                          <SelectItem value="pt">Português</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6 mt-6">
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Personalized Insights
                </CardTitle>
                <CardDescription className="font-body">Recommendations based on your profile and goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.niche && profile.geography && (
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-display font-semibold mb-2">Niche-Specific Recommendations</h4>
                    <p className="text-sm text-muted-foreground font-body mb-3">
                      Based on your {profile.niche} niche and {profile.geography.toUpperCase()} audience:
                    </p>
                    <ul className="text-sm space-y-1 font-body">
                      {profile.niche === "finance" && (
                        <>
                          <li>• Focus on high-value keywords like "investment", "loans", "insurance"</li>
                          <li>• Consider implementing sticky ads for better viewability</li>
                          <li>• Target CPC range: $2.00 - $8.00 for optimal revenue</li>
                        </>
                      )}
                      {profile.niche === "technology" && (
                        <>
                          <li>• Tech audience responds well to native ad formats</li>
                          <li>• Consider A/B testing ad placements in article content</li>
                          <li>• Target CPC range: $1.50 - $4.00 for your niche</li>
                        </>
                      )}
                      {profile.niche === "general" && (
                        <>
                          <li>• Diversify ad formats to maximize fill rates</li>
                          <li>• Focus on improving page load speed for better CTR</li>
                          <li>• Target CPC range: $0.50 - $2.00 for general content</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}

                {profile.goals.length > 0 && (
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-display font-semibold mb-2">Goal-Based Action Items</h4>
                    <div className="space-y-2">
                      {profile.goals.includes("Increase RPM") && (
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5 font-display">
                            RPM
                          </Badge>
                          <p className="text-sm font-body">
                            Optimize ad placement above the fold and consider implementing lazy loading
                          </p>
                        </div>
                      )}
                      {profile.goals.includes("Optimize CTR") && (
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5 font-display">
                            CTR
                          </Badge>
                          <p className="text-sm font-body">
                            Test different ad sizes and colors that complement your site design
                          </p>
                        </div>
                      )}
                      {profile.goals.includes("Expand to new geos") && (
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5 font-display">
                            GEO
                          </Badge>
                          <p className="text-sm font-body">
                            Create localized content and consider multi-language support
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {profile.monthlyViews && (
                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-display font-semibold mb-2">Traffic-Based Insights</h4>
                    <p className="text-sm font-body">
                      With {Number(profile.monthlyViews).toLocaleString()} monthly views, you're in the{" "}
                      {Number(profile.monthlyViews) > 1000000
                        ? "high-traffic"
                        : Number(profile.monthlyViews) > 100000
                          ? "medium-traffic"
                          : "growing"}{" "}
                      category.
                    </p>
                    <ul className="text-sm space-y-1 mt-2 font-body">
                      {Number(profile.monthlyViews) > 1000000 && (
                        <>
                          <li>• Consider premium ad networks for higher CPCs</li>
                          <li>• Implement header bidding for maximum revenue</li>
                          <li>• Focus on user experience to maintain high traffic</li>
                        </>
                      )}
                      {Number(profile.monthlyViews) <= 1000000 && Number(profile.monthlyViews) > 100000 && (
                        <>
                          <li>• Optimize existing content for better search rankings</li>
                          <li>• Consider email marketing to increase return visitors</li>
                          <li>• Test different ad densities to find the sweet spot</li>
                        </>
                      )}
                      {Number(profile.monthlyViews) <= 100000 && (
                        <>
                          <li>• Focus on SEO and content creation to grow traffic</li>
                          <li>• Ensure ads don't negatively impact user experience</li>
                          <li>• Consider social media promotion for content distribution</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

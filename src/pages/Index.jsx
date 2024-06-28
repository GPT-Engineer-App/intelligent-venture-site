import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to AI Startup</h1>
        <p className="text-lg text-muted-foreground">
          Revolutionizing the future with AI technology.
        </p>
      </header>

      <Separator />

      <section className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
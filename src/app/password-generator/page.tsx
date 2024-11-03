"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy } from 'lucide-react'


export default function PasswordGenerator() {

    const [password, setPassword] = useState('');
    

    return (
        <Card className="w-full max-w-md mx-auto mt-20">
        <CardHeader>
          <CardTitle>Password Generator</CardTitle>
          <CardDescription>Generate a secure password with custom options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input 
              type="text" 
              value={password} 
              readOnly 
              className="flex-grow font-mono"
            />
            <Button size="icon" variant="outline">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
  
          <div className="space-y-2">
            <Label>Password Length: {length}</Label>
            <Slider
              min={8}
              max={32}
              step={1}
            />
          </div>
  
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="uppercase">Include Uppercase</Label>
              <Switch
                id="uppercase"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="lowercase">Include Lowercase</Label>
              <Switch
                id="lowercase"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="numbers">Include Numbers</Label>
              <Switch
                id="numbers"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="symbols">Include Symbols</Label>
              <Switch
                id="symbols"
              />
            </div>
          </div>
  
          <Button className="w-full">
            Generate Password
          </Button>
        </CardContent>
      </Card>
    )
}
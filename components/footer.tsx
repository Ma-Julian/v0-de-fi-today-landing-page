"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {/* Back to Top Button */}
            <Button onClick={scrollToTop} variant="outline" size="sm" className="gap-2 bg-transparent">
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Follow us on</span>
              <a
                href="https://x.com/ethconomics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on X"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 DeFi Today. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

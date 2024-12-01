'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button, Link } from '@nextui-org/react'

export default function SlidingMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <div className="bg-background/70 backdrop-blur-lg rounded-full shadow-lg px-4 py-2">
          <Button
            variant="light"
            size="sm"
            onPress={() => setIsOpen(!isOpen)}
            endContent={
              <Icon
                icon={isOpen ? "mdi:chevron-down" : "mdi:chevron-up"}
                className="h-4 w-4 transition-transform duration-200"
              />
            }
          >
            <Icon icon="mdi:apps" className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-background/70 backdrop-blur-lg rounded-t-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-4 space-y-4 max-w-md mx-auto">
          <Link href="#all-exchanges" className="block py-2 hover:bg-default-100 rounded-lg px-4">
            All Exchanges
          </Link>
          <Link href="#suggest" className="block py-2 hover:bg-default-100 rounded-lg px-4">
            Suggest An Exchange
          </Link>
          <div className="flex items-center py-2 hover:bg-default-100 rounded-lg px-4">
            <Icon icon="mdi:magnify" className="h-5 w-5 mr-2" />
            <span>Search</span>
          </div>
          <div className="flex items-center py-2 hover:bg-default-100 rounded-lg px-4">
            <Icon icon="mdi:translate" className="h-5 w-5 mr-2" />
            <span>En</span>
          </div>
          
          <Button className="w-full" color="primary" variant="flat">
            Manage Profile
          </Button>
          <Button className="w-full" color="primary">
            Contribute to Earn
          </Button>

          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm text-default-500">
              <Link href="#terms" size="sm">Terms</Link>
              <Link href="#privacy" size="sm">Privacy</Link>
              <Link href="#contact" size="sm">Contact</Link>
              <Link href="#about" size="sm">About Exir</Link>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-default-500">© 2024 Exir Exchange</span>
              <div className="flex gap-4">
                <Link href="#whatsapp">
                  <Icon icon="mdi:whatsapp" className="h-5 w-5" />
                </Link>
                <Link href="#twitter">
                  <Icon icon="mdi:twitter" className="h-5 w-5" />
                </Link>
                <Link href="#instagram">
                  <Icon icon="mdi:instagram" className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


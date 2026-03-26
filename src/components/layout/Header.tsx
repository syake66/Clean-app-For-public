'use client'

import React from 'react'
import { LogOut, User } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export const Header = ({ userName, role }: { userName?: string, role?: string }) => {
    const router = useRouter()
    const supabase = createClient()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <header className="bg-white border-b border-slate-200 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                    <span className="font-bold">C</span>
                </div>
                <h1 className="font-bold text-slate-900 hidden sm:block">Clean App</h1>
                {role === 'admin' && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">管理者</span>
                )}
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User size={16} />
                    <span>{userName || 'ゲスト'}</span>
                </div>
                <button
                    onClick={handleSignOut}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <LogOut size={20} />
                </button>
            </div>
        </header>
    )
}

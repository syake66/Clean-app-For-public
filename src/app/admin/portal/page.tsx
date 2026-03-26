'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Settings, Calendar as CalendarIcon, Key } from 'lucide-react'
import { Header } from '@/components/layout/Header'

export default function AdminPortalPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header userName="管理者" role="admin" />
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
                    <h2 className="text-center text-3xl font-bold text-slate-900">管理者ポータル</h2>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-4">
                    <button
                        onClick={() => router.push('/admin/dashboard')}
                        className="w-full flex items-center justify-between p-4 rounded-xl border bg-white hover:border-blue-500 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <Settings className="text-blue-600" />
                            <div>
                                <h3 className="font-bold text-slate-900">管理者ダッシュボード</h3>
                                <p className="text-sm text-slate-500">全体管理</p>
                            </div>
                        </div>
                        <ArrowRight className="text-slate-400" />
                    </button>

                    <button
                        onClick={() => router.push('/staff/calendar')}
                        className="w-full flex items-center justify-between p-4 rounded-xl border bg-white hover:border-indigo-500 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <CalendarIcon className="text-indigo-600" />
                            <div>
                                <h3 className="font-bold text-slate-900">スタッフカレンダー</h3>
                                <p className="text-sm text-slate-500">現場稼働</p>
                            </div>
                        </div>
                        <ArrowRight className="text-slate-400" />
                    </button>
                </div>
            </div>
        </div>
    )
}

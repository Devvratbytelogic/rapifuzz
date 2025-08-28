'use client'
import { Input } from '@heroui/react'
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ImageSearchFilter() {
    const [query, setQuery] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Debounce mechanism
        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())
            if (query) {
                params.set('search', query)
            } else {
                params.delete('search')
            }
            // Push new URL with updated search params
            router.replace(`?${params.toString()}`)
        }, 500) // 500ms debounce

        return () => clearTimeout(handler) // clear previous timeout
    }, [query, searchParams, router])

    return (
        <div className='form_wrapper w-[350px]'>
            <Input
                type="search"
                variant="bordered"
                placeholder="Search Images ..."
                startContent={<FaSearch />}
                labelPlacement="outside"
                className='w-full'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    )
}

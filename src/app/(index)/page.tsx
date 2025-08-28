/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageSearchFilter from '@/components/common/filters/ImageSearchFilter'
import { getImagesData } from '@/server-api/apihandler'
import React from 'react'

export default async function HomePage({ searchParams }: { searchParams?: any }) {
const params = await searchParams;
  const query = params?.search || "";

  const data = await getImagesData();

  const filteredData =
    data && data?.length > 0
      ? data?.filter(item => item?.title?.toLowerCase().includes(query.toLowerCase()))
      : [];

  return (
    <div className="layout_container ">
      <div className='custom_container_padding rounded-2xl bg-white/10 backdrop-blur-lg border space-y-8 min-h-screen'>
        <div className="flex justify-between gap-5">
          <h1 className="large_heading text-center">Image Gallery</h1>
          <ImageSearchFilter />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData && filteredData?.length > 0 ? (
            filteredData?.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/10 backdrop-blur-lg border overflow-hidden"
              >

                <div className="p-4">
                  <p className="text-gray-800 font-medium">{item.title}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No images found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import { Plus } from "lucide-react"
import { useRouter, useParams } from "next/navigation"

import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/date-table"

import { ProductColumn, columns } from "./columns"

interface ProductClientProps {
  data : ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({
  data
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for you store."
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4"/>
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data}  />
    </>
  )
}
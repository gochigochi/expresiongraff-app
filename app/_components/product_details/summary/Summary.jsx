import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { fromHexToColorName } from '@/app/_lib/formatColors'
import { formatPosition } from '@/app/_lib/formatPosition'
import { formatSize } from '@/app/_lib/formatSize'
import { formatQty } from '@/app/_lib/formatQty'
import { getBudget } from '@/app/_lib/getBudget'

const Summary = ({ product, selected }) => {

  const searchParams = useSearchParams()
  const tech = searchParams.get("tecnica")
  const getTotalBudget = useCallback(getBudget)
  const [total, setTotal] = useState(0)

  console.log(product)

  useEffect(() => {

    const formatedSelection = {
      precioPrenda: product.price,
      tecnica: tech,
      size: selected.size,
      ubicacion: selected.position,
      cantidad: selected.qty,
      color: selected.color,
    }

    setTotal(getTotalBudget(formatedSelection))

  }, [selected])

  return (
    <div className="w-[40%] flex gap-5 h-fit bg-slate-50 p-5 rounded-2xl">
      <img
        src={product.img}
        alt={product.title}
        className="w-24 h-24 overflow-hidden rounded-md object-cover"
      />
      <div className="grow">
        <h2 className="text-2xl">{product.title}</h2>
        <dl className="py-2">
          <div className="flex justify-between pt-3 mt-3">
            <dt className="text-gray-500">Técnica</dt>
            <dd className="capitalize">{tech}</dd>
          </div>
          <div className="flex justify-between pt-3 mt-3 border-t border-slate-300">
            <dt className="text-gray-500">Color</dt>
            <dd>{fromHexToColorName(selected.color)}</dd>
          </div>
          <div className="flex justify-between pt-3 mt-3 border-t border-slate-300">
            <dt className="text-gray-500">Ubicacion</dt>
            <dd>{formatPosition(selected.position)}</dd>
          </div>
          <div className="flex justify-between pt-3 mt-3 border-t border-slate-300">
            <dt className="text-gray-500">Logo</dt>
            <dd>{formatSize(selected.size)}</dd>
          </div>
          <div className="flex justify-between pt-3 mt-3 border-t border-slate-300">
            <dt className="text-gray-500">Cantidad</dt>
            <dd>{formatQty(selected.qty)}</dd>
          </div>
          <div className="flex justify-between pt-3 mt-3 border-t border-slate-300">
            <dt className="font-bold">Total</dt>
            <dd className="font-bold">$ {total}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Summary
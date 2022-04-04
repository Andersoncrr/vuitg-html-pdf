import React, { useEffect, useState } from 'react'

type Props = {
  pdfUrl: string
  width: number
  heigth: number
}

export const PdfReader = ({pdfUrl, width, heigth,}: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    mounted && <div className='flex justify-center'>
      <object data={pdfUrl} type="application/pdf" width={width} height={heigth}>
        <iframe title='PDF' src={pdfUrl} width={width} height={heigth}>
          <p>Este navegador no soporta PDF!</p>
        </iframe>
      </object>
    </div>
    
  )
}

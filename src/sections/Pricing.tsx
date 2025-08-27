import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Pricing() {
  const { t } = useTranslation()
  const [yearly, setYearly] = useState(false)
  const plans = t('pricing.plans', { returnObjects: true }) as Array<{name:string, price:string, feat:string[]}>
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="section-title">{t('pricing.title')}</h3>
          <div className="flex items-center gap-2">
            <span className={!yearly ? 'font-bold' : ''}>{t('pricing.m')}</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" checked={yearly} onChange={()=>setYearly(v=>!v)} />
              <div className="h-6 w-11 rounded-full bg-grayLight peer-checked:bg-secondary transition"></div>
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white peer-checked:translate-x-5 transition"></div>
            </label>
            <span className={yearly ? 'font-bold' : ''}>{t('pricing.y')}</span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, i)=>(
            <div key={i} className="card">
              <h4 className="text-xl font-extrabold mb-2">{p.name}</h4>
              <p className="text-3xl font-extrabold text-secondary mb-4">{p.price}</p>
              <ul className="space-y-2 mb-6">
                {p.feat.map((f,idx)=>(<li key={idx}>• {f}</li>))}
              </ul>
              <a className="btn-primary w-full text-center">اختر الخطة</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

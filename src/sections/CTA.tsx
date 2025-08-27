import { useTranslation } from 'react-i18next'

export default function CTA() {
  const { t } = useTranslation()
  return (
    <section className="section bg-secondary/5">
      <div className="container text-center">
        <h3 className="section-title">{t('cta.title')}</h3>
        <p className="section-sub mx-auto">{t('cta.desc')}</p>
        <div className="mt-6">
          <a className="btn-primary">{t('cta.btn')}</a>
        </div>
      </div>
    </section>
  )
}

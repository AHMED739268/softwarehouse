import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-secondary text-white font-extrabold">Z</span>
          <span className="font-extrabold">Zid-like</span>
        </div>
        <p className="text-grayDark text-sm">{t('footer.copy')}</p>
      </div>
    </footer>
  )
}
